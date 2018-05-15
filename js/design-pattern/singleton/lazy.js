// 惰性单例
// 惰性单例指的是需要的时候才去创建对象实例

var getSingle = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments))
    }
}

