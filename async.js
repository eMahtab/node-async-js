var async =  require('async');

async.waterfall([

  function task1(callback) {
    console.log('start!');
    setTimeout(function(){
    	console.log("T1 Complete"); 
    	// Passing value to next task
    	callback(null, 'Value from Task 1'); 
     },5000);
     
  },
  function task2(task1Result, callback) {
    console.log(task1Result);
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
    	callback(null); 
    },100);
   
  }
],
function (err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any tasks, all tasks done!');   
  }
});