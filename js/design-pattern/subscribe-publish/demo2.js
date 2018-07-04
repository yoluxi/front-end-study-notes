// 全局的发布-订阅对象

// 使用Event作为中介 将发布者和订阅者联系起来  降低了订阅者和发布者的耦合


var Event = (function() {
    var clientList = {},
        listen,
        trigger,
        remove;

    listen = function(key, fn) {
        if(!clientList[key]) {
            clientList[key] = []
        }
        clientList.push(fn)
    }
    
    trigger = function() {
        var key = Array.prototype.shift(arguments)
        var fns = clientList[key]

        if(!fns || fns.length === 0) {
            return false
        }

        for (var i = 0; fn = fns[i++]; ) {
            fn.apply(this, arguments)
        }
    }

    remove = function(key, fn) {
        var fns = clientList[key]

        if (!fns) {
            return false
        }

        if (!fn) {
            fns && (fns.length === 0)
        } else {
            for (var l = fns.length; l >= 0; i--) {
                var _fn = fns[l]
                if (_fn === fn) {
                    clientList.splice(l, 1)
                } 
            }
        }
    }

    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
})()


Event.listen('square88', function(price){
    console.log(price)
})

Event.trigger('square', 3000)


