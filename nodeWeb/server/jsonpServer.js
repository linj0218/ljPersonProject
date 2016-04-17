/**
 * Created by LJPersonPC on 2016-04-15.
 */
var express = require('express');
var app = express();
var urllib = require('url');
var post = 8080;
var controller = require("./controller/controller");

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/*", function(req, res) {
    var params = urllib.parse(req.url, true);
    console.log(req.url);
    console.log(params.query.data);

    var resData = controller.distribute(params);

    if (params.query && params.query.jsoncallback) {
        var str =  params.query.jsoncallback + '(' + resData + ')';//jsonp
        res.end(str);
    } else {
        res.end(JSON.stringify(resData));//普通的json
    }
});

app.listen(post);
console.log('Listening on port '+post+'...');