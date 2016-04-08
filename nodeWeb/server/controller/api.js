

var api001 = require("../service/api001.js");
var api002 = require("../service/api002.js");
var api003 = require("../service/api003.js");
var api004 = require("../service/api004.js");

function apiController(apiPort, params, response){

	if(apiPort == "api001"){ api001.api001Service(response); }

	if(apiPort == "api002"){ api002.api002Service(response); }
	// 登录
	if(apiPort == "api003"){ api003.api003Service(params, response); }
	// 获取游戏列表
	if(apiPort == "api004"){ api004.api004Service(params, response); }
}

exports.apiController = apiController;