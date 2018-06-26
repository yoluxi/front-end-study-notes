// 完整的reflect Api暴露在对象的运行级元操作上
// 他可以用来有效的还原proxy Api
// 还允许调用相应的proxy traps, 尤其是在执行proxies时非常有用

var o = {a: 1}
Object.defineProperties(o, 'b', {value: 2})
o[Symbol('c')] = 3

Reflect.ownKeys(o)  ['a', 'b', Symbol(c)]

function C(a, b) {
    this.c = a + b
}

var instace = Reflect.construct(C, [20, 22])
instace.c // 42