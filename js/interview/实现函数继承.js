
// 借用构造函数
function Parent(name, age) {
    this.name = name
    this.age = age
}

function Child(name, age) {
    Parent.apply(this, arguments)
}

// 原型链继承
function Animal() {
    this.type = 'animal'
}

function Cat() {
    
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

let cat = new Cat()



