// generators 通过function* 和 yield关键字简化了迭代器的编写
// 通过function* 声明的函数返回一个Generators实例
// Generators可以看做是迭代器的子类， 包含额外的next和throw方法
// 这些特性可以让得到的结果值再传回给Generator，因此yield是一个具有返回值的表达式

var fabonacci = {
    [Symbol.iterator]: function* () {
        var pre = 0,
            cur = 1;
        for(;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur
        }
    }
}

for (var n of fibonacci) {
    if (n > 1000) {
        break
    }
}