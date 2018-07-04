var salesOffices = {} // 定义售楼处

salesOffices.clientList = [] // 缓存列表 存放订阅者的回调函数 

salesOffices.listen = function(key, fn) {  // 增加订阅者
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}

salesOffices.trigger = function() {
    var key = Array.prototype.shift.call(arguments) // 取出消息类型
    var fns = this.clientList[key] // 取出该消息对应的回调函数集合 

    if (!fns || fns.length === 0) {
        return false
    }


    for (var i = 0, fn ; fn = fns[i++]; ) {
        fn.apply(this, arguments) // arguments 是发布消息时带上的参数
    }
}


salesOffices.listen(function(price, squareMeter) {
    console.log('price--', price)
    console.log('squareMeter--', squareMeter)
})

// 订阅88的消息
salesOffices.listen('squre88', function(price) { 
    console.log('价格=' + price)
})

// 订阅99的消息
salesOffices.listen('squre99', function(price) {
    console.log('价格=' + price)
})

salesOffices.trigger('squre88', 8000)
salesOffices.trigger('squre99', 9000)


// 通用实现

var event = {
    clientList: [],
    listen: function(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function() {
        var key = Array.prototype.shift.call(arguments)
        var fns = this.clientList[key]

        if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
            return
        }

        for(var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    }
}

event.remove = function(key, fn) {
    var fns = this.clientList[key]
    if (!fns) { // 如过当前消息没有被订阅  则直接返回
        return false
    }

    if (!fn) { // 
        fns && (fns.length = 0)
    }else {
        for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表 
            var _fn = fns[l]
            if (_fn === fn) {
                fns.splice(l , 1)
            }
        }
    }




}

// 定义一个installEvent 函数 这个函数可以给所有的对象都动态安装发布-订阅功能

var installEvent = function(obj) {
    for (var i in obj) {
        obj[i] = event[i]
    }
}


var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('sqare88', function(price) {
    console.log(price)
})

salesOffices.listen('squre99', function(price) {
    console.log(price)
})

salesOffices.trigger('sqare88', 1000)
salesOffices.trigger('sqare99', 2000)





salesOffices.trigger(2000, 88)
salesOffices.trigger(20000, 98)




// 实际例子 登录 
// 网页多个模块  依赖登录接口 
login.succ(function(data) {
    header.setAvatar(data.avatar) //设置header模块的头像
    nav.setAvatar(data.avatar) // 设置导航模块的对象
    message.refresh() // 刷新消息列表
    cart.refresh() // 刷新购物车模快 
})  

// 缺点 对每个模块都需要去了解 针对具体实现编程的典型例子 

// 使用发布订阅者 用户信息感兴趣的模块将自行订阅登录成功的事件  当登录成功之后  登录模块只需要发布登录成功的消息  

// 各模块监听登录消息
var header = (function() {
    login.listen('loginSuc', function(data){
        header.setAvatar(data.avatar)
    })

    return {
        setAvatar: function(data) {
            console.log('设置header模块的头像')
        }
    }
})()

var nav = (function() {
    login.listen('loginSuc', function(data) {
        nav.setAvatar(data.avatar)
    })
    return {
        setAvatar: function(avatar) {
            console.log('设置导航栏的头像')
        }
    }
})()

