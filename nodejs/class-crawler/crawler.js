var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
    var $ = cheerio.load(html)
    //var chapters = $('.mod-chapters')
    var chapters = $('.chapter')
    /*
    data format
    [{
        chapter : '',
        list : [{
            title : '',
            url : ''
        },
        {
            title : '',
            url : '',
        }]
    }]
    */

    // 实现逻辑
    var chapterList = []
    chapters.each(function(item){
        var videoData = []
        var chapter = $(this)
        var chapterTitle = chapter.find('strong').text()
        //console.log(chapterTitle)
        var videos = chapter.find('li')
        videos.each(function(item){
            var video = $(this)
            var videoTitle = video.text()
            var videoUrl = video.children('.studyvideo').attr('href')
            var videoId = videoUrl.match(/\d+/)[0]
            //console.log(videoId)
            videoData.push({
                id: videoId,
                title: videoTitle,
                url: videoUrl
            })
        })
        chapterList.push({
            chapterTitle: chapterTitle,
            chapterData: videoData
        })

    })
    return chapterList
}


/**
 *
 * 打印课程信息
 *
 * @brief printCourseInfo 
 *
 * @param courseData
 *
 * @return 
 */
function printCourseInfo(courseData) {
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle)
        var videos = item.chapterData
        videos.forEach(function(item, index){
            console.log('   ' + index + ': [' + item.id + ']  ' + item.title.trim())
            console.log('       http://www.imooc.com' + item.url)
        })
    })
}

http.get(url, function(res){
    var html = ''
    res.on('data', function(data){
        html += data
    })
    res.on('end', function(){
        var courseData = filterChapters(html)
        printCourseInfo(courseData)
        //console.log(html)
    })
}).on('error', function(){
    console.log('获取数据失败')
})
