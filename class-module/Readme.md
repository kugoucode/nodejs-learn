# One class

## 创建模块

``` JavaScript
touch student.js
```

## 引用模块

``` JavaScript
var student = require('./student')
```

## 将模块中的方法暴露出去，使外部可以引用该方法

``` JavaScript
exports.add = function(){
    
}
```

## 使用引用模块中的方法

``` JavaScript
var student = require('./student')
student.add('student one')
```
