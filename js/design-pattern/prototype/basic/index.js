function Person (name) {
    this.name = name
}

Person.prototype.getName = function () {
    return this.name
}

var ObjectFactory = function () {
    var obj = new Object(), // 从Object.prototype上克隆一个对象
        Constructor = [].shift.call(arguments); // 取得外部的构造器 Person
    obj.__prototype__ = Constructor.prototype; // 指向正确的原型
    var ret = Constructor.apply(obj, arguments); // 借用外部的构造器给obj设置属性
    return typeof ret === 'Object' ? ret : obj;   //  确保构造器总是返回一个对象 
}



// this 指向
// 1.作为对象的方法调用
var obj = {
    a: 1,
    getA: function() {
        alert(this === obj)
        alert(this.a) 
    }
}

// 2.作为普通函数调用
window.name = 'globalName'
var getName = function () {
    return this.name;
}
console.log(getName())


// 3.构造器调用
var MyClass = function () {
    this.name = 'sven'
}

var obj = new MyClass();

console.log(obj.name) 


// Function.prototype.call 或 Function.prototype.apply 调用

var obj1 = {
    name: 'seve',
    getName: function () {
        return this.name
    }
}

var obj2 = {
    name: 'anne'
}

console.log(obj1.name) // seve
console.log(obj1.getName.call(obj2)) // anne

// call 和 apply 
// apply(this指向，arr)
// call(this指向, arg1, arg2)
// 如果第一个参数为null this默认指向宿主对象
// call是包装在apply上的语法糖 

// call 和 apply的用途
// 1 改变this指向
// 2 Function.prototype.bind 
Function.prototype.bind = function (context) {
    var self = this;
    return function () {
        return self.apply(context, arguments)
    }
}

var obj = {
    name: 'sven'
}

var func = function () {
    alert(this.name)
}.bind(obj)

func()

// 借用其他对象的方法 
var A = function (name) {
    this.name = name
}

var B = function () {
    A.apply(this, arguments)
}

B.prototype.getName = function () {
    return this.name
}

// Array.prototype.push 中传入的对象必须满足两个条件
// 对象本身可以存取属性
// 对象length属性可读写
