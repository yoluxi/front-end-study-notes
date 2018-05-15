// 回调函数
var getUserInfo = function(userId, callback) {
    $.ajax({
        url: '',
        success: function(data){
            if (typeof callback === 'function' ) {
                  callback(data)  
            }
        }
    })
}


getUserInfo(123, function(data) {
    console.log(data)
})


// 函数作为返回值输出
// 1 判断数据类型
var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === '[object '+ type +']'
    }
}

var isString = isType('String')
var isArray = isType('Array')

// 2 获取一个单例 
var getSingle = function (fn) {
    var ret;
    return function () {
        return ret || (ret = fn.apply(this, arguments)) 
    }
}

var getScritpt = getSingle(function() {
    return document.createElement('script')
})


// 高阶函数实现AOP
// 面向切面编程的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来  
// 如日志统计 安全控制 异常处理 

Function.prototype.before = function (beforefn) {
    var _this = this; // 保存原函数的引用
    return function() { // 返回包含原函数和新函数的代理函数
        beforefn.apply(this, arguments); // 执行新函数 修正this 
        return _this.apply(this, arguments) // 执行原函数
    }
}


Function.prototype.after = function (afterfn) {
    var _this = this; // 保存原函数的引用
    return function() { 
        afterfn.apply(this, arguments); // 执行新函数 修正this 
        return _this.apply(this, arguments) // 执行原函数
    }
}

var fun = function() {
    console.log(2)
}

fun = fun.before(function() {
    console.log(1)
}).after(function() {
    console.log(3)
})

fun()


// 柯里化  
// 部分求值 函数接受一些参数，接受参数完， 返回一个函数，之前传入的参数形成一个闭包 函数需要求值时  之前的传入的参数被用于一次性求值 

var monthCost = 0;
var cost = function (money) {
    monthCost += money
} 
cost(100)
cost(200)
cost(300)

alert(monthCost)

// 我们只想得到最后一次的结果 
var currying = function (fn) {
    var args = []
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            return arguments.callee
        } 
    }
}


var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i]
        }
        return money
    }
})()

 
var cost = currying(cost)  // 转换成柯里化函数 
cost(100)
cost(200)
cost(300)

alert(cost())


