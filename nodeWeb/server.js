var http   = require('http');
var url    = require("url");
var path   = require("path");
var fs     = require("fs");
var config = require("./server/dao/config.js");
var mime   = require("./server/tooljs/mime.js").mime;
var api    = require("./server/controller/api.js");
var port   = 8080;
//var express = require('express');
//var app    = express();

http.createServer( function(request, response) {

    var pathname = url.parse(request.url).pathname;
    var realPath = "html" + pathname;
    
    // 静态文件
    if( !pathname.split("/api/")[1] ) {
    	fs.exists(realPath, function (exists) {
    		// console.log(realPath);
            if (!exists) {

                response.writeHead(404, "Not Found", {'Content-Type': 'text/plain'});
                response.write("This request URL " + pathname + " was not found on this server.");
                response.end();
            } else {

                var ext = path.extname(realPath);
                ext = ext ? ext.slice(1) : 'unknown';
                var contentType = mime[ext] || "text/plain";
                response.setHeader("Content-Type", contentType);

                fs.stat(realPath, function (err, stat) {

                    var lastModified = stat.mtime.toUTCString();
                    var ifModifiedSince = "If-Modified-Since".toLowerCase();
                    response.setHeader("Last-Modified", lastModified);

                    if (ext.match(config.Expires.fileMatch)) {

                        var expires = new Date();
                        expires.setTime(expires.getTime() + config.Expires.maxAge * 1000);
                        response.setHeader("Expires", expires.toUTCString());
                        response.setHeader("Cache-Control", "max-age=" + config.Expires.maxAge);
                    }

                    if (request.headers[ifModifiedSince] && lastModified == request.headers[ifModifiedSince]) {

                        response.writeHead(304, "Not Modified");
                        response.end();
                    } else {

                        fs.readFile(realPath, "binary", function(err, file) {
                            if (err) {

                            	console.log(err);
                                response.writeHead(500, {'Content-Type': 'text/plain'});
                                response.end(err);

                            } else {

                                response.writeHead(200, {'Content-Type': 'text/html'});
                                response.write(file, "binary");
                                response.end();
                            }
                        })
                    }
                })
            }
        })
    } 
    // 接口
    else {

        var apiPort = pathname.split("/api/")[1];
        var resStr  = "";
        var params  = url.parse(request.url, true).query.data;
        console.log("接口："+apiPort+" 参数："+params);

        api.apiController(apiPort, params, response);

        //设置跨域访问
        /*app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1');
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });

        app.get('/auth/:id/:password', function(req, res) {
            res.send({id:req.params.id, name: req.params.password});
        });*/

        /*var params = url.parse(request.url, true)
        if (params.query && params.query.callback) {
            resStr =  params.query.jsoncallback + '(' + JSON.stringify(api.apiController(apiPort)) + ')';//jsonp  
        } else {
            resStr = JSON.stringify(api.apiController(apiPort));
        }

        response.statusCode=200;
        // response.sendDate=false;
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        response.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        response.setHeader("X-Powered-By",' 3.2.1');
        response.setHeader("Content-Type","text/plain");
        // response.write("callback("+JSON.stringify(results)+")");
        response.write( resStr );
        response.end();*/

    }
}).listen(port);

console.log('Server running at port:'+port+'/');