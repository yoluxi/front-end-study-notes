// 迭代器对象允许像（CLR）的IEnumerable接口或者Java的iterable一样创建自定义迭代器
// 可以将for...in 这种遍历方式更加一般化为for...of 的形式  它是支持惰性模式的 不需要真正实现一个数组

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0,
            cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur]
                return {done: false, value: cur}
            }
        }
    }
}

for (var n of fibonacci) {
    if (n > 1000) {
        break
    }
}

