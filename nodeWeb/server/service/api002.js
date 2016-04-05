
var query  = require("../tooljs/tooljs.js");

function api002Service(response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	query.select("select * from nuser",function(results){
		response.end("api002"+JSON.stringify(results));
	});
}

exports.api002Service = api002Service;