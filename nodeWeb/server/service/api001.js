
var query  = require("../tooljs/tooljs.js");

function api001Service(response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	query.select("select * from nuser",function(results){
		response.end("api001"+JSON.stringify(results));
	});
}

exports.api001Service = api001Service;