/**
 * Created by LJPersonPC on 2016-04-16.
 */
var api005 =  require("../service/api005");
var api006 =  require("../service/api006");

function distribute( params){
    var api = params.pathname;

    var promise = new Promise(function(resolve, reject){
        var resData = null;

        // 测试跨域
        if(api == "/api005"){
            resData = params.query.data;
        }
        // 跨域登陆
        if(api == "/api006"){
            resData = api006.api006Service(params.query.data);
        }

        if(!resData){
            var err = "distribute 无数据返回";
            reject(err);
        }else{
            resolve(resData);
        }
    });

    promise.then(function(data){
        return data;
    },function(err){
        console.log("已失败： " + err);
    }).catch(function(e){
        console.log("返回异常: " + e);
    });
}
exports.distribute = distribute;