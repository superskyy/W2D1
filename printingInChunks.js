var https = require('https'); 

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
  	if(response.statusCode !== 200) {
  		callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
  		return;
  	}

  	var body = '';
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
	  	body += chunk;
	});
	response.on('end', function(){
	  callback(null, body);
	});
  });
}