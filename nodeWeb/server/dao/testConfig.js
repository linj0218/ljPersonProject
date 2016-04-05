/*var mysql         = require('mysql');        
var TEST_DATABASE = 'node1s';  
var TEST_TABLE    = 'nuser';  
//创建连接  
var client        = mysql.createConnection({  
  user     : 'root',  
  password : 'root',  
});  

client.connect();
client.query("use " + TEST_DATABASE);

client.query(  
  'SELECT * FROM '+TEST_TABLE,  
  function selectCb(err, results, fields) {  
    if (err) {  
      throw err;  
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
              console.log("%d\t%s\t%s", results[i].nuserid, results[i].nusername, results[i].nusertel);
          }
      }    
    client.end();  
  }  
); */
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

function select(sqlStr,callback){
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
}
exports.select = select;
exports.add    = add;