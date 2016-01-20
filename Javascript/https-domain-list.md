# 获取HTTP域名对应的HTTPS域名路径

## 打开指定的域名分类列表地址
``` html
http://ihttps.xxxxx.com/index.php/domain/all?cname=headline
```

## 打开控制台，拷贝下面的代码运行
```JavaScript

var obj = $(".table > tbody").children;

for(var i=0; i<obj.length; i++) {
   var tdObj = obj[i].children;
   console.log('[@domain]');
   console.log('org : ' + tdObj[1].textContent.match(/(.*)\(/)[1]);
   console.log('now : ' + tdObj[2].textContent);
}

```

## 复制console打印出的内容拷贝到domain.conf文件中即可
