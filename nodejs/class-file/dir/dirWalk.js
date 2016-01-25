var fs = require('fs')

/**
 * @brief walk dir path
 *
 * @param path       路径
 * @param floor      层数
 * @param handleFile 文件、文件夹处理函数
 *
 * @return 
 */
function walk(path, floor, handleFile) {
    handleFile(path, floor);
    floor ++;
    fs.readdir(path, function(err, files) {
        if(err) {
            console.log('read dir error')
        } else {
            files.forEach(function(item){
                var tmpPath = path + '/' + item;
                fs.stat(tmpPath, function(err1, stats) {
                    if(err1) {
                        console.log('stat error')
                    } else {
                        if(stats.isDirectory()) {
                            walk(tmpPath, floor, handleFile);
                        } else {
                            handleFile(tmpPath, floor);
                        }
                    }
                })
            })
        }
    })
}

exports.walk = walk;
