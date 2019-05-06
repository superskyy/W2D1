var https = require('https'); 

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
  	if(response.statusCode !== 200) {
  		console.log('Request Failed with Status Code ' + response.statusCode);
  		return;
  	}

  	var body = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
	  	body += chunk;
	  	console.log(body);
	});
	
	response.on('end', function(){
	  console.log('\n' + 'Chunk Received.' + '\n');
	});
  });
}
getAndPrintHTMLChunks();

