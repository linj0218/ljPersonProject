
var config = require("../dao/config.js")

//获取当前时间
function getNewTime(){
	var t = new Date();
	var year = t.getFullYear();
	var month = t.getMonth()+1 >= 10 ? t.getMonth()+1 : "0"+(t.getMonth()+1);
	var day = t.getDate() >= 10 ? t.getDate() : "0"+t.getDate();
	return ""+year+month+day;
}

function select(sqlStr,callback){
  var client = config.conectDB();
  client.query(
    sqlStr,
    function selectCb(err, results, fields) {  
      if (err) {  
        throw err;  
      }
      client.end();
      if(results){

        callback(results);

      }else{
        
      } 
    }  
  ); 
}

function add(sqlStr, callback) {
  var client = config.conectDB();
  client.query(
    sqlStr,
    function addCb(err, results, fields) {
      if(err){
        throw err;
      }
      client.end();
      if(results){

        callback(results)

      }
    }
  );
}

exports.getNewTime = getNewTime;
exports.select     = select;
exports.add        = add;