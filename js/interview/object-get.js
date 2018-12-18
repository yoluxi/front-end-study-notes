/**
 * 实现get方法 
 * 
 * const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]}
 * 
 * get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 * [ 'FE Coder', 1, 'byted']
 */


 function get(data, ...args) {
     let pattern = /\[[0-9]+\]/gi
     return args.map(item => {
         const paths = item.split('.')
         let res = data
         paths.map(path => {
             if (pattern.test(path)) {
                let match = path.match(pattern)
                let cmd = path.replace(match, '')
                let index = match[0].replace(/[\[\]]/gi, '')
                res = res[cmd][index]
            } else {
                res = res[path]
            }
         })
         return res
     })
 }
 const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]}
 let result = get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
console.log(result)

// 对象处理
// 通过拆解 获取每个key的值  然后遍历获取最后的值

// 数组处理 =》 对象处理
// target[0] = target 0 