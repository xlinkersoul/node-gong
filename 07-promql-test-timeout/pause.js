var q = require('q');

function pause(time) {
    var deferred = q.defer();

    // if the supplied time value is not a number, 
    // set it to 0, 
    // else use supplied value
    time = isNaN(time) ? 0 : time;

    // Logging that this function has been called, 
    // just in case you forgot about a pause() you added somewhere, 
    // and you think your code is just running super-slow :)
    console.log('pause()-ing for ' + time + ' milliseconds');

    setTimeout(function () {
        deferred.resolve();
    }, time);

    return deferred.promise;
}

module.exports = pause;