


// 列表 数组匹配
var [a, b] = [1, 2]

// 对象匹配
var {
    op: a,
    lhs: {op :b},
    rhs: c
} = getAStNode()

var {op, lhs, rhs} = getAStNode()

// 可以用在函数的参数中
function g({name: x}) {
    console.log(x)
}

g({name: "d"})


// 解构容错机制
var [a] = []
a === undefined

// 带默认值的解构容错
var [a = 1] = []
a === 1

// 解构 + 默认参数
function r(x, y, w = 10, h = 10) {
    return x + y + w + 10
}

r({x: 1, y:2})  === 23



// 默认参数default + 不定参数rest + 扩展运算符spread
// 默认参数的功能是在函数被调用时对参数做自动估值
// 扩展运算符则可以将数组转换为连续的函数参数
// 不定参数（rest）用在参数末尾，将末尾的参数转换为数组   不定参数让我们不再需要arguments

function f(x, y = 12) {
    return x + y;
}

f(3)


function f(x, ...y) {
    // y是一个数组
    return x + y.length
}

f(1, 3, 4) === 3

function f(x,y,z) {
    return x + y +z
}

f(...[1, 2, 3]) === 6


