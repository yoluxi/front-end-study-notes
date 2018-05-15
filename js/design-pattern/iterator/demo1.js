// 内部迭代器 
var each = function (arr, callback) {
    for(var i = 0, l = arr.length; i < l; i++) {
        callback.call(arr[i], i, arr[i])
    }
}


each([2,3,4,5], function(i, n) {
    console.log(i, n)
})


// 外部迭代器
var iterator = function(obj) {
    var current = 0;
    var next = function() {
        return current += 1
    }
    var isDone = function() {
        return current >= obj.length
    }
    var getCurrentItem = function() {
        return obj[current]
    }
    return {
        next: next,
        isDone: isDone,
        getCurrentItem: getCurrentItem
    }
}


var compare = function(iterator1, iterator2) {
    if (iterator1.length === iterator2.length) {
        
    }
}