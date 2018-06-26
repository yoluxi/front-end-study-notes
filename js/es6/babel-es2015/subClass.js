// 在es6中  可以创建内置对象 如Array Date 以及DOMElement的子类


// 创建Array的子类
class MyArray extends Array {
    constructor(...args) {
        super(...args)
    }
}

var arr = new MyArray();
arr[1] = 12
arr.length == 2