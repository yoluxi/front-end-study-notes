// generator函数 一种状态机  封装了多个内部状态
// 执行generator函数会返回一个遍历器对象   所以一个遍历器对象生成器 

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();

console.log(hw.next())

