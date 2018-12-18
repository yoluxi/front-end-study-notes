function Storage() {

}

// 使用闭包
Storage.getInstance = (function() {
    var instance = null
    return function() {
        if (!instance) {
            instance = new Storage()
        }
        return instance
    }
})()

Storage.prototype.getItem = function(key) {
    return localStorage.getItem(key)
}

Storage.prototype.setItem = function(key, val) {
    return localStorage.setItem(key, val)
}

