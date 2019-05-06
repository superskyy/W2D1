var https = require('https'); 

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function (response) {
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
		callback('\n' + body + '\n');
	  	console.log('Chunk Received.');
	});
  });
};

