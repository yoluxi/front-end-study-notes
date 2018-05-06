// proxy 用户修改某些操作的默认行为 等同于在语言层面作出修改  属于一种元编程  
// proxy 在对象前添加一层拦截  访问对象时  只有通过了拦截 因此提供了一种机制 可以对外界的访问进行过滤和改写 

var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}`)
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key,receiver) {
        console.log(`getting ${key}`)
        return Reflect.get(target, key, receiver)
    }
})

obj.count = 1


