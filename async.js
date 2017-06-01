var async =  require('async');

async.waterfall([

  function task1(done) {
    console.log('start!');
    setTimeout(function(){
    	console.log("T1 Complete"); 
    	// <- set value to passed to step 2
    	done(null, 'Value from step 1'); 
     },5000);
     
  },
  function task2(task1Result, done) {
    console.log(task1Result);
    setTimeout(function(){
    	console.log("T2 Complete");
    	// <- set value to passed to step 3
    	done(null, 'Value from step 2');
      },1000);
    
  },
  function task3 (task2Result, done) {
    console.log(task2Result);
    setTimeout(function(){
    	console.log("T3 Complete"); 
    	// <- no value set for the next step.
    	done(null); 
    },100);
   
  }
],
function (err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any steps, operation done!');
  }
});