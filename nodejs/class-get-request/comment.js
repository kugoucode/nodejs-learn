var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': 'Come on, go go go ...',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/document',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection': 'keep-alive',                         
        'Content-Length': postData.length,                               
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=8d776670-7b80-4a1e-9cda-7215d11f0c22; imooc_isnew_ct=1448460926; IMCDNS=0; loginstate=1; apsid=EzNjI5MDM1ZTE4MDBlNmNiNDA3NTY3MzY4N2U4YWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzI1NTA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrdWdvdW1pbmdAc2luYS5jb20AAAAAAAAAAAAAAAAAAGIwNTc5MDhmNmQ3ODkxOGVkN2RmZmUxMmM2MjFhMWZkFxabVhcWm1Y%3DYT; last_login_username=kugouming%40sina.com; PHPSESSID=5pmdoecnb9nbpjonrnlbr41t77; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=80; cvde=56a3a02085c46-36; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1453004236,1453126947,1453547192,1453563938; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1453576284; imooc_isnew=2',
        'Host': 'www.imooc.com',                      
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',                                            
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function(res){
    console.log('Status: ' + res.statusCode)
    console.log('Headers:' + JSON.stringify(res.headers))
    res.on('data', function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function(){
        console.log('Comment the end!')
    })
})

req.on('error',function(e){
    console.log('Error: ' + e.message)
})

req.write(postData)

req.end()
