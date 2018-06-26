// symbol 对对象的状态进行访问控制
// symbol 允许对象的属性不仅可以是字符串 还可以通过symbol命名
// symbol 是一种基本的数据类型  可选参数用于调试
// symbol 是唯一的 但不是私有的  因为他们使用诸如 Object.getOwnPropertySymbols这样的方法调用

(function () {
    // 模块内的symbol
    var key = Symbol("key")
    
    function Myclass(privateData) {
        this[key] = privateData;
    }

    Myclass.prototype = {
        doStuff: function () {
            this[key]
        }
    }

    // babel只能有限支持  完全支持需要原生实现
    typeof key === "symbol"
})()

var c = new MyClass("hello")
c["key"] === undefined

