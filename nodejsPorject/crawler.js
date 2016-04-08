var http = require("http")
var cheerio = require("cheerio");
var url  = "http://i.y.qq.com/v8/fcg-bin/fcg_v8_mvout4web.fcg?cmd=1&format=html&tpl=mvplay&cid=artx6eb4qnw2ccw"

function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $("iframe")
	console.log(chapters.prevObject[0]);
}

http.get(url, function(res){
	var html = ""
	res.on("data", function(data){
		html += data
	})

	res.on("end", function(){
		filterChapters(html)
	})
}).on("error",function(){
	console.log("获取数据错误");
})
