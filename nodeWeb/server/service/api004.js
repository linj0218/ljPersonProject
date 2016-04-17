
var query  = require("../tooljs/tooljs.js");

function api004Service(params, response){
	var reqData = JSON.parse(params);
	console.log(reqData.uid);
	var resData = {"status":1,"data":"","msg":""};
	var sqlStr  = "" +
				"select ugr.score,u.username,u.loginname,u.gender,u.usertel,g.gamename,g.gameurl "+
				"from user_game_rel ugr,user u,games g "+
				"where ugr.userid=u.userid "+
				"and ugr.gameid=g.gameid "+
				"and ugr.userid="+reqData.uid+"";
	console.log(sqlStr);
	query.select(sqlStr, function(results){

		resData.status = 0;
		if(!results.length){
			resData.msg    = "暂无数据";
		}else {
			resData.data   = JSON.stringify(results);
		}

		console.log("返回："+resData);

        response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(JSON.stringify(resData));
		response.end();
	});
}

exports.api004Service = api004Service;