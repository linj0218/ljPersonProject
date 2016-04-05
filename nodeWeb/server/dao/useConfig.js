
var tool = require("../tooljs/tooljs.js");

var query = require("./testConfig.js")
query.select("select * from nuser",function(obj){
	console.log(obj);
});

query.add("insert nuser (nusername, nusertel, createdate) values('test"+parseInt(Math.random()*100)+"', 123, "+tool.getNewTime()+")",function(obj){
	console.log(obj);
});