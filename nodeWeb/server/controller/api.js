

var api001 = require("../service/api001.js");
var api002 = require("../service/api002.js");
var api003 = require("../service/api003.js");

function apiController(apiPort, params, response){

	if(apiPort == "api001"){ api001.api001Service(response); }

	if(apiPort == "api002"){ api002.api002Service(response); }

	if(apiPort == "api003"){ api003.api003Service(params, response); }
}

exports.apiController = apiController;