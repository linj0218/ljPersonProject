
var query  = require("../tooljs/tooljs.js");

function api003Service(params, response){
	query.select("select u.userid,u.loginname,u.password,u.username,u.gender,u.usertel from user u",function(results){

		// console.log(params);
		var reqData = JSON.parse(params);
		var resData = {"status":1,"data":"","msg":""};
		for(var i=0; i<results.length; i++){
			if(reqData.name == results[i].loginname && reqData.pwd == results[i].password){
				resData.status = 0;
				resData.msg    = "登录成功";
				resData.data   = JSON.stringify(results[i]);
				break;
			} else {
				resData.msg    = "账号或密码错误";
			}
		}


		/*response.statusCode=200;
        // response.sendDate=false;
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    	response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    	response.setHeader("X-Powered-By",' 3.2.1');
        response.setHeader("Content-Type","text/plain");*/
        response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(JSON.stringify(resData));
		response.end();
	});
}

exports.api003Service = api003Service;