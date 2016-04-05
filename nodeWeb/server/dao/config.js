function conectDB(){
  var mysql         = require('mysql');        
  var TEST_DATABASE = 'node1s';  
  //创建连接  
  var client        = mysql.createConnection({
    user     : 'root',
    password : 'root',
  });

  client.connect();
  client.query("use " + TEST_DATABASE);
  return client;
}

/*function select(sqlStr,callback){
  var client = conectDB();
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
  var client = conectDB();
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
}*/

exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/ig,
    maxAge: 60 * 60 * 24 * 365
};
exports.Compress = {
    match: /css|js|html/ig
};
exports.Welcome = {
    file: "index.html"
};
exports.conectDB = conectDB;