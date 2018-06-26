var obj = {
    // 设置prototype
    __proto__: theProtoObj,
    // 计算属性不会重复设置__proto__ 或者将直接触发错误
    ['__proto__']: somethingElse,
    // handler,

    // 方法
    toString() {
        return "d" + super.toString();
    },
    // 设置动态的属性名
    ["prop_" + (() => 42)()]: 42
}