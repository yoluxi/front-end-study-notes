// proxies 允许创建一个可以全范围控制宿主对象行为的对象 可以用于拦截 对象虚拟化 日志记录/性能分析


// 代理普通对象
var target = {}
var handler = {
    get: function (receiver, name) {
        return `Hello ${name}`
    }
}

var p = new Proxy(target, handler)
p.world === "Hello world"

// 代理函数对象
var target = function () {
    return "I am the target"
}

var handler = {
    apply: function (reveiver, ...args) {
        return "I am the proxy"
    }
}

var p = new Proxy(target, handler)
p() === "I am the proxy"


// 