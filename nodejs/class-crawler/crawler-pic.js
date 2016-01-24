var http = require('http')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')
//var EventEmitter = require('events').EventEmitter

//var ctlMv = new EventEmitter()

function movePic(fileName){
    console.log('File : ' + fileName)
    var imgReadStreama = fs.createReadStream(fileName + '.jpg')
    fs.mkdir('./images')
    var imgWriteStreama = fs.createWriteStream('./images/' + fileName + '.jpg')
    imgWriteStreama.pipe(imgReadStreama)
    //imgWriteStreama.pipe(readStream)
    imgWriteStreama.on('close', function(){
        console.log('Move img over : ' + fileName)
    })
}

// 太平洋网 赵奕欢 最新写真集图片列表地址
var url = 'http://photos.pcgames.com.cn/photolist/50234.html'

function filterUrlList(html) {
    console.log('=====================')
    var $ = cheerio.load(html)
    var listData = $('.listnr > .ulPic').find('img')
    console.log('Len: ' + listData.length)

    var urlData = []
    listData.each(function(index, item){
        var imgUrl = $(this).attr('src')
        imgUrl = imgUrl.replace(/_220x165/,'').match(/.*\/(\w+)\.jpg/i)
        console.log('[' + imgUrl[1] + '] ' + imgUrl[0])

        var filePath = './images/' + imgUrl[1] + '.jpg'
        var imgWriteStream = fs.createWriteStream(filePath)
        request(imgUrl[0]).pipe(imgWriteStream)
        imgWriteStream.on('close', function(){
            console.log(filePath)
        })
        urlData.push(filePath)
    })
    return urlData
}

http.get(url, function(res){
    var html = ''
    res.on('data', function(data){
        html += data
    })
    res.on('end', function(){
        var urlList = filterUrlList(html)
        console.log(urlList)
    })
}).on('error', function(e){
    console.log('Error: ' + e.message)
})
