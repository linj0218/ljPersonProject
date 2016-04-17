/**
 * Created by LJPersonPC on 2016-04-16.
 */
var config = require("../dao/config");

function api006Service(reqData){
    config.select("select u.userid,u.loginname,u.password,u.username,u.gender,u.usertel from user u",function(results){
        var resData = {"status":1,"data":{},"msg":""};

        for(var i=0; i<results.length; i++){
            if(reqData.name == results[i].loginname && reqData.pwd == results[i].password){
                resData.status = 0;
                resData.msg    = "登录成功";
                resData.data   = results[i];
                break;
            } else {
                resData.msg    = "账号或密码错误";
            }
        }

        return resData;
    });
}
exports.api006Service = api006Service;