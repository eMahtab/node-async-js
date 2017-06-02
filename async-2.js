var async =  require('async');

async.waterfall([

  function task1(callback) {
    console.log('start!');
    setTimeout(function(){
    	console.log("T1 Complete"); 
    	// Passing value to next task
    	callback(null, 'V1',["a","b","c"]); 
     },5000);
     
  },
  function task2(arg1, arg2, callback) {
    console.log("Arg 1 >>>> "+arg1);
    console.log("Arg 2 >>>> "+arg2);
    setTimeout(function(){
    	console.log("T2 Complete");
    	// Passing value to next task
    	callback(null, 'Value from Task 2');
      },1000);
    
  },
  function task3 (task2Result, callback) {
    console.log(task2Result);
    setTimeout(function(){
    	console.log("T3 Complete"); 
    	// Passing no value to last callback
    	callback(null,{"id1":"83hygt7u6542","id2":"plokbw8772w"}); 
    },100);
   
  }
],
function (err,result) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any tasks, all tasks done!');  
    console.log("Last "+JSON.stringify(result));
  }
});