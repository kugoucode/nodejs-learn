// NodeJS file read write
//
// 由于Node.js仅支持如下编码：utf8, ucs2, ascii, binary, base64, hex，并不支持中文GBK或GB2312之类的编码，
// 因此如果要读写GBK或GB2312格式的文件的中文内容，必须要用额外的模块：iconv-lite
// 安装模块：npm install iconv-lite

var fs = require('fs')
var iconv = require('iconv-lite')

var file = './demo.txt'
var fileutf8 = './demo_utf8.txt'

console.log("GBK 编码\n")
writeFile(file)
readFile(file)

//++++++++++++++++++++++++++++++++++++++++//

console.log("UTF8 编码\n")
writeFileUtf8(fileutf8)    
readFileUtf8(fileutf8)

/**
 * 将字符串内容写入文件 [GBK]
 *
 * @brief writeFile 
 *
 * @param file
 *
 * @return 
 */
function writeFile(file){
    // 测试用的中文
    var str = "\n 我是一个中国人 Hello myself!"
    // 把中文转为字节数组
    var arr = iconv.encode(str, 'gbk')
    console.log(arr)

    // appendFile 如果文件不存在，会自动创建新文件
    // 如果用writeFile,那么会删除旧文件,直接写新文件
    fs.appendFile(file, arr, function(err){
        if(err)
            console.log('Error : ' +  err)
        else
            console.log('Success!')
    })
}

/**
 * 读取文件内容
 *
 * @brief readFile 
 * @param file
 * @param encode
 *
 * @return 
 */
function readFile(file){
    fs.readFile(file, function(err, data){
        if(err)
            console.log('Read file error!')
        else{
            // 读取成功时,输出字节数组
            console.log(data)
            // 把数组转为gbk中文
            var str = iconv.decode(data, 'gbk')
            console.log(str)
        }
    })
}


//++++++++++++++++++++++++++++++++++++++++//


function writeFileUtf8(file){
    // 测试用的中文
    var str = "\n 我是一个中国人 Hello myself!"

    // appendFile 如果文件不存在，会自动创建新文件
    // 如果用writeFile,那么会删除旧文件,直接写新文件
    fs.appendFile(file, str, function(err){
        if(err)
            console.log('Error : ' +  err)
        else
            console.log('Success!')
    })
}

function readFileUtf8(file){
    fs.readFile(file, function(err, data){
        if(err)
            console.log('Read file error!')
        else{
            // 读取成功时,输出字节数组
            console.log(data)
            // 把数组转为gbk中文dd
            var str = iconv.decode(data, 'utf8')
            console.log(str)
        }
    })
}

