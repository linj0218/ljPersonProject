/**
 * Created by lj on 2016/4/12.
 */

var express = require("express");
var app = express();

// 设置跨域访问
app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/auth/:id/:password", function(req, res){
    res.send({id: req.params.id, name:req.params.password});
});
app.listen(8080);
console.log("listening on port: 8080");