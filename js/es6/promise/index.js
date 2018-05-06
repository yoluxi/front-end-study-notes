// Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
})

console.log(promise1)


let myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
})



// 高级例子

var promiseCount = 0
function testPromise() {
    let thisPromiseCount = ++ promiseCount
    console.log('开始'+ thisPromiseCount)
    // 新构建一个Promise实例 使用Promise 实现每过一段时间给计数器加1 每段时间间隔1~3秒不等 
    let p1 = new Promise((resolve, reject) => {
            window.setTimeout(function() {
               resolve(thisPromiseCount) 
            }, Math.random() * 2000  + 1000)    
    })
}

// 事件  回调  promise  

// promise 是异步的一种解决方案
// promise 的特点 
// 1 对象状态不受外界影响  3中状态 pending fulfilled reject
// 2 一旦状态改变  就不会再变  

// promise的缺点  1. 无法中途取消  2 如果不添加回调 则会在内部抛出错误  3 处于pending的状态时  无法得知在哪个阶段  

const promise = new Promise(function(resolve, reject) {
    if(true) {
        resolve(value)
    }else {
        reject(value)
    }
})



