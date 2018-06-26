// let const
// let 是var的升级版
// const 只允许被赋值一次 通过静态限制阻止变量在赋值前被使用

function f() {
    {
        let x
        {
            //
            const x = "sneaky"
            // 错误
            x = "foo"
        }
        x = "foo"
        // 错误
        let x = "ccc"
    }
}




