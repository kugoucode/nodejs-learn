var fs = require('fs');
var dirWalk = require('./dirWalk');

function handleFile(path, floor) {
    var blankStr = '';
    for(var i = 0; i < floor; i ++) {
        blankStr += '  ';
    }

    fs.stat(path, function(err, stats) {
        if(err) {
            console.log('stat error');
        } else {
            if(stats.isDirectory()) {
                console.log('+ ' + blankStr + path);
            } else {
                console.log('- ' + blankStr + path);
            }
        }
    })
}


dirWalk.walk('../class-file', 0, handleFile);
