var async =  require('async');
var request=require('request');
var URL="http://localhost:3000";

async.series([
  
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
  
  function task2(callback) {
    request(URL+'/iso/country/Japan',function(err,res,body){
      if(err){
         callback(err);
      }else{
         console.log("Response 2 "+body)
         callback(null,body);
      }
    })
  },
  
  function task3(callback) {
    request(URL+'/olympic/2016/medal/DE',function(err,res,body){
      if(err){
         callback(err);
      }else{
         console.log("Response 3 "+body)
         callback(null,body);
      }
    })   
  }
],
function (err,results) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any tasks, all tasks done!');
    console.log("Results "+results.length+"  "+results)     
  }
});