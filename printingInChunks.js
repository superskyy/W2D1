var https = require('https'); 

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
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
	  console.log('Chunk Received. Length:');
	});
  });
}
getAndPrintHTMLChunks();

