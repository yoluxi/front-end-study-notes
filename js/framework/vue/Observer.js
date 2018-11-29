// 实现一个数据监听器
// 核心方法就是 Object.defineProperty

function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有的子属性
    var dep = new Dep(); // 订阅者容器
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return val;
        },
        set: function(newVal) {
            val = newVal
            console.log('属性 '+ key + ' isObeserve')
            dep.notify(); // 如果属性变化 通知所有订阅者
        }
    })
}


function observe(data) {
    if (!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach((key) => {
        defineReactive(data, key, data[key])
    })
} 

function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}



function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get(); // 将自己添加到订阅器的操作
}

Watcher.prototype = {
    update: function() {
        this.run()
    },
    run: function() {
        var value = this.vm.data[this.exp];
        this.oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal)
        }
    },
    get: function() {
        Dep.target = this;
        var value = this.vm.data[this.exp];
        Dep.target = null;
        return value;
    }
}

function SelfVue (data, el, exp) {
    this.data = data;
    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });
    return this;
}

var ele = document.querySelector('#name');
var selfVue = new SelfVue({
    name: 'hello world'
}, ele, 'name');



var library = {
    book1: {
        name: ''
    },
    book2: ''
}


observe(library)
library.book1.name = 2



// 添加一个消息订阅器，订阅器主要负责收集订阅者 然后再属性变化的时候执行订阅者的更新函数