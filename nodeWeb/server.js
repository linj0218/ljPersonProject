var http   = require('http');
var url    = require("url");
var path   = require("path");
var fs     = require("fs");
var config = require("./server/dao/config.js");
var mime   = require("./server/tooljs/mime.js").mime;
var api    = require("./server/controller/api.js");
var port   = 8080;

var server = http.createServer( function(request, response) {

    var pathname = url.parse(request.url).pathname;
    var realPath = "html" + pathname;
    
    // 静态文件
    if( !pathname.split("/api/")[1] ) {
    	fs.exists(realPath, function (exists) {
    		console.log(realPath);
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
        console.log(apiPort);
        api.apiController(apiPort,response);

    }
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port+'/');