var async =  require('async');
var request=require('request');
var URL="http://localhost:3000";

async.waterfall([
  
  function task1(callback) {
    console.log('start!');
    request(URL+'/olympic/2016/ranking/4',function(err,res,body){
      if(err){
         callback(err);
      }else{
         console.log("Response 1 "+body)
         callback(null,body);
      }
    })
  },
  
  function task2(arg, callback) {
    request(URL+'/iso/country/'+JSON.parse(arg).Country,function(err,res,body){
      if(err){
         callback(err);
      }else{
         console.log("Response 2 "+body)
         callback(null,body);
      }
    })
  },
  
  function task3(arg, callback) {
    request(URL+'/olympic/2016/medal/'+JSON.parse(arg).iso,function(err,res,body){
      if(err){
         callback(err);
      }else{
         console.log("Response 3 "+body)
         callback(null);
      }
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