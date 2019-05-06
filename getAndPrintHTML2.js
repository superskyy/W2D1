var https = require('https'); 

function getAndPrintHTML (options) {
	https.get(requestOptions, function (response) {
  	if(response.statusCode !== 200) {
  		console.log('Request Failed with Status Code ' + response.statusCode);
  		return;
  	}

  	var body = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
	  	body += chunk;
	});
	
	response.on('end', function(){
		console.log('\n' + body + '\n');
	  	console.log('Chunk Received.');
	});
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);
