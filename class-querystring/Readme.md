# node class query string

## query string

``` JavaScript
$ node
# 格式化Query对象为字符串( & / =)
> querystring.stringify({name:'mark',class:['node','php'],from:'baidu'})
'name=mark&class=node&class=php&from=baidu'
# 指定第二个参数格式化Query对象(, / =)
> querystring.stringify({name:'mark',class:['node','php'],from:'baidu'}, ',')
'name=mark,class=node,class=php,from=baidu'
# 指定第二个参数与第三个参数格式化Query对象(, / :)
> querystring.stringify({name:'mark',class:['node','php'],from:'baidu'}, ',', ':')
'name:mark,class:node,class:php,from:baidu'

# 格式化字符串为Query对象
> querystring.parse('name=mark&class=node&class=php&from=baidu')
{ name: 'mark', class: [ 'node', 'php' ], from: 'baidu' }
> querystring.parse('name=mark,class=node,class=php,from=baidu', ',')
{ name: 'mark', class: [ 'node', 'php' ], from: 'baidu' }
> querystring.parse('name:mark,class:node,class:php,from:baidu', ',', ':')
{ name: 'mark', class: [ 'node', 'php' ], from: 'baidu' }

# query 字符串转义与非转义
> querystring.escape('<哈哈>')
'%3C%E5%93%88%E5%93%88%3E'
> querystring.unescape('%3C%E5%93%88%E5%93%88%3E')
'<哈哈>'
```
