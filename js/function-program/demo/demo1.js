// 
function splat(fn) {
    return function () {
        return fn.apply(null, arguments)
    }
}

let getAdd = splat(function(a, b) { return a + b })

console.log(getAdd(1, 2))


