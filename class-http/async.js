var c = 0

function printIt() {
    console.log(c)
}

// step 1:
// 同步执行
/*
function plus() {
    c += 1
}
*/

// step 2:
// 同步执行收到干扰
/*
function plus() {
    setTimeout(function(){
        c += 1;    
    },1000);
}
*/

// step 3:
// Callback 方式实现同步执行 => 异步编程实现非堵塞
function plus(callback) {
    setTimeout(function() {
        c += 1;
        callback();
    },1000);
}

// step 1 & 2 : 
//plus()
//printIt()

// step 3:
plus(printIt)
