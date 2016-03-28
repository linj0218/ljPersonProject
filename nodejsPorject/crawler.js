var http = require("http")
var url  = "http://www.handlecar-oms.com/htmlfile/prod/bjbapp/mobile/carCheckReport.html?shid=603&sttid=113&detail=1"

http.get(url, function(res){
	var html = ""
	res.on("data", function(data){
		html += data
	})

	res.on("end", function(){
		console.log(html);
	})
}).on("error",function(){
	console.log("获取数据错误");
})
