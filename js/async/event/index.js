
// 线程的阻塞
var start = new Date();
setTimeout(function() {
    var end = new Date();
    console.log("time elapsed", end - start, 'ms')   // 1002ms
}, 500)

// while(new Date - start < 1000) {}
// 疑问的点
// 异步回调什么时候放进主进程的？


// 异步的计时函数
var fireCount = 0;
var startA = new Date();
var timer = setInterval(function(){
    if (new Date - start > 1000) {
        clearInterval(timer)
        console.log(fireCount) // 252
        return
    }
    fireCount++
}, 0)


var a = 0;
var b = 0;
function A(a) {
    A = function(b) {
        alert(a+b++)  
    }
    alert(a++)
}

A(1)
A(2)


