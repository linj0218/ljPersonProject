

var api001 = require("../service/api001.js");
var api002 = require("../service/api002.js");

function apiController(apiPort, response){

	if(apiPort == "api001"){ api001.api001Service(response); }

	if(apiPort == "api002"){ api002.api002Service(response); }
}

exports.apiController = apiController;