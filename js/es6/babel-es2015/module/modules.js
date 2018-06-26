// es6 从语言层面对模块进行了支持  编写方式借鉴了流行的js模块加载器  (AMD, CommonJs)
// AMD
// CommonJs

// 由宿主环境的默认加载器定义模块运行时行为 采取隐式异步模式 -- 在模块可以被获取前不会有代码执行
// Babel可以将ES2015的模块转换为一下几种格式：Common.js，AMD，System，以及UMD。你甚至可以创建你自己的方式。

// app.js
import * as math from "lib/math"
