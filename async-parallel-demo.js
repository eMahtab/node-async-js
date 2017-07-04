var async =  require('async');

async.parallel([
    function(callback) {
        setTimeout(function() {
            console.log("First one is done")
            callback(null, 'one');
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            console.log("Second one is done")
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function(err, results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log("results "+ results)
});