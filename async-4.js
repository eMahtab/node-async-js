var async =  require('async');
var http=require('http');

async.waterfall([
  
  function task1(callback) {
    console.log('start!');
    http.get({port:3000,path:'/olympic/2016/ranking/4'},function(res){
      if(res.statusCode < 200 || res.statusCode > 299){
         callback(new Error("Server Response Status "+res.statusCode))
      }
      var result="";
      res.on('data',function(chunk){result += chunk;})
      res.on('end',function(){console.log("Response 1 "+result);callback(null,result)})
    }).on('error',function(err){
      console.error("Error with request "+err);
      callback(err);
    })     
  },

  function task2(arg, callback) {
    http.get({port:3000,path:'/iso/country/'+JSON.parse(arg).Country},function(res){
      if(res.statusCode < 200 || res.statusCode > 299){
         callback(new Error("Server Response Status "+res.statusCode))
      }
      var result="";
      res.on('data',function(chunk){result += chunk;})
      res.on('end',function(){console.log("Response 2 "+result);callback(null,result)})
    }).on('error',function(err){
      console.error("Error with request "+err);
      callback(err);
    })    
  },
  
  function task3(arg, callback) {
    http.get({port:3000,path:'/olympic/2016/medal/'+JSON.parse(arg).iso},function(res){
      if(res.statusCode < 200 || res.statusCode > 299){
         callback(new Error("Server Response Status "+res.statusCode))
      }
      var result="";
      res.on('data',function(chunk){result += chunk;})
      res.on('end',function(){console.log("Response 3 "+result);callback(null)})
    }).on('error',function(err){
      console.error("Error with request "+err);
      callback(err);
    })    
  }

],
function (err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any tasks, all tasks done!');     
  }
});