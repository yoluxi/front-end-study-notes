// 封装变量
var mult = function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a *= arguments[i];
    }
    return a;
}


// 利用缓存提高函数的性能
var cache = {}
var mult = function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (cache[args]) {
        return cache[args]
    }

    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a *= arguments[i];
    }
    return cache[ args ] = a
}

// 封装
// cache 变量仅仅在mult中使用 所以封装在其内部
var mult = (function() {
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) {
            return cache[args]
        }

        var a = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            a *= arguments[i];
        }
        return cache[ args ] = a
    }
})() 

// 提炼函数 
var mult = (function () {
    var cache = {};
    var calculate = function () {
        var a = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            a *= arguments[i];
        }
        return a
    }

    return function() {
        var args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) {
            return cache[args]
        }

        return cache[args] = calculate.apply(null, arguments)
    }
})()


// 延续局部变量的寿命
// 使用完report之后  局部变量随即销毁 此时还未发送http请求 导致上报数据丢失
var report = function (src) {
    var img = new Image();
    img.src = src;
}
report('xx.png')



// 用闭包实现命令模式



