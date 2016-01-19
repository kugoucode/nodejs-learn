function learn(something) {
    console.log(something)
}

function we(callback, something) {
    something += ' is so cool'
    callback(something)
}

we(learn, 'Node')

// 匿名函数
we(function(something){
    console.log('The second : ' + something)
}, 'Jade')
