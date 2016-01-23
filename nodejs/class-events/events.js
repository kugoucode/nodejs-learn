var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

// 这里注册监听操作  可以使用 addEventListener

life.on('wait for me', function(who){
    var timer = setTimeout(function(){
        /*clearTimeout(timer)*/
        console.log('Please wait ' + who + ' 1 ...')
    }, 1000)

    /*clearTimeout(timer)*/
})
life.on('wait for me', function(who){
    var timer = setTimeout(function(){
        /*clearTimeout(timer)*/
        console.log('Please wait ' + who + ' 2 ...')
    }, 3000)

    /*clearTimeout(timer)*/
})
life.on('wait for me', function(who){
    var timer = setTimeout(function(){
        console.log('Please wait ' + who + ' 3 ...')
    }, 2000)
    /*clearTimeout(timer)*/

})
life.on('wait for me', function(who){
    var timer = setTimeout(function(){
        /*clearTimeout(timer)*/
        console.log('Please wait ' + who + ' 4 ...')
    }, 1000)

})


// 不执行对应的emit，不会调用该监听函数
life.on('wait for you', function(who){
    console.log(who + ' wait you')
})

// 触发监听函数执行动作
life.emit('wait for me', 'Mark')


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// 判断操作是否有对应的监听函数
var hasConforListener = life.emit('wait for me', 'Mark')
var hasWaitListener = life.emit('wait for you', 'John')
var hasPlayListener = life.emit('wait', 'Mark & John')

console.log(hasConforListener)  // true
console.log(hasWaitListener)    // true
console.log(hasPlayListener)    // false



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// 移除监听事件

life.on('wait for me', water)

// 1、该种匿名函数是无法移除监听事件的
life.removeListener('wait for you', function(who){
    console.log('give ' + who + ' water')
})

function water(who) {
    console.log('give ' + who + ' water')
}
// 2、这样调用可以移除监听事件
life.removeListener('wait for you', water)

life.emit('wait for you', 'Lily')


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// 查看一个监听操作有多少事件监听
console.log('Listeners count 1 : ' + life.listeners('wait for me').length)

// OR
console.log('Listeners count 2 : ' + EventEmitter.listenerCount(life, 'wait for me'))



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// 批量移除事件监听函数（不传参数，会将所有事件监听函数移除，故这里加上具体的事件名）
life.removeAllListeners() // "wait for you" 的事件也会被移除
life.removeAllListeners('wait for me') // "wait for you" 的事件未被移除

