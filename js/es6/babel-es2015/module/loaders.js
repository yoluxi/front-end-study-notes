// 非ES2015部分
// 这并不是ES2015的一部分：
// 这部分ECMAScript 2015规范是由实现定义（implementation-defined）的。
// 最终的标准将在WHATWG的Loader 规范中确定，目前这项工作正在进行中，下面的内容来自于之前的ES2015草稿。

// 模块加载器支持一下功能
// 1 动态加载
// 2 状态一致性
// 3 全局空间一致性
// 4 编译钩子
// 5 嵌套虚拟化

//
System.import("lib/math").then(function (m) {
    alert("2pa" + m.sum(m.pi, m.pi))
})


// 创建执行沙箱  - new Loaders
var loader = new Loader({
    global: fixup(window)  // replace console.log
})

loader.eval("console.log(\"hello world!\");")

// 直接操作模块缓存
System.get("jquery")
System.set("jquery", Module({$: $}))

// 由于Babel默认使用common.js的模块，你需要一个polyfill来使用加载器API。 点击获取.
// 为了使用此功能，你需要告诉Babel使用system模块格式化工具。在此查看 System.js

