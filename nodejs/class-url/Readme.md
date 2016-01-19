# class url

## node cli for url

``` nodejs
# 进入 node 命令行模式
$ node

# 输入 url ,可以看到url在node中的方法
> url
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }

# 使用url.parse方法解析url
> url.parse('http://www.baidu.com:8900/s?word=xxx#maodian')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8900',
  port: '8900',
  hostname: 'www.baidu.com',
  hash: '#maodian',
  search: '?word=xxx',
  query: 'word=xxx',
  pathname: '/s',
  path: '/s?word=xxx',
  href: 'http://www.baidu.com:8900/s?word=xxx#maodian' }

# url格式化对象Query转换为对象形式
> url.parse('http://www.baidu.com:8900/s?word=xxx#maodian', true)
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8900',
  port: '8900',
  hostname: 'www.baidu.com',
  hash: '#maodian',
  search: '?word=xxx',
  query: { word: 'xxx' }, # 注意这里的变化
  pathname: '/s',
  path: '/s?word=xxx',
  href: 'http://www.baidu.com:8900/s?word=xxx#maodian' }

# 针对未指定协议的url进行解析 [注意下面两个有与没有第三个参数的区别]
> url.parse('//www.baidu.com:8900/s?word=xxx#maodian', true)
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: '#maodian',
  search: '?word=xxx',
  query: { word: 'xxx' },
  pathname: '//www.baidu.com:8900/s',
  path: '//www.baidu.com:8900/s?word=xxx',
  href: '//www.baidu.com:8900/s?word=xxx#maodian' }
> url.parse('//www.baidu.com:8900/s?word=xxx#maodian', true, true)
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8900',
  port: '8900',
  hostname: 'www.baidu.com',
  hash: '#maodian',
  search: '?word=xxx',
  query: { word: 'xxx' },
  pathname: '/s',
  path: '/s?word=xxx',
  href: '//www.baidu.com:8900/s?word=xxx#maodian' }

# 将url格式化的对象转换成url
> url.format({
...   protocol: 'http:',
...   slashes: true,
...   auth: null,
...   host: 'www.baidu.com:8900',
...   port: '8900',
...   hostname: 'www.baidu.com',
...   hash: '#maodian',
...   search: '?word=xxx',
...   query: 'word=xxx',
...   pathname: '/s',
...   path: '/s?word=xxx',
...   href: 'http://www.baidu.com:8900/s?word=xxx#maodian' })
'http://www.baidu.com:8900/s?word=xxx#maodian'

# url路径的拼接 
> url.resolve('http://www.baidu.com/', 's?word=xxx#maodian')
'http://www.baidu.com/s?word=xxx#maodian'
```
