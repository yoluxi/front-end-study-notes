// 箭头函数与包裹它的代码共享相同的this对象 如果箭头函数在其他函数内部  它也将共享函数的arguments变量

// 箭头函数的this指向定义时所在的对象
// 不可以当构造函数  使用new 会报一个不是构造函数的错误
// 不可以使用arguments 使用rest替代
// 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。


// 表达式写法
var odds = events.map( v => v + 1)


// 语句写法
nums.forEach( v => {
    if ( v % 5 === 0 ) {
        fives.push(v)
    }
})


// this 对象
var bob = {
    _name: "bob",
    _friends: [],
    printFriends() {
        this._friends.forEach((f) => {
            console.log(f)
        })
    }
}




