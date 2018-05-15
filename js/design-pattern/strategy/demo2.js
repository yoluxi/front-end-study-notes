// 小球动画
// 4个参数分别代表 已消耗的时间 初始位置 目标位置 动画持续的总时间
var tween = {
    linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    strongEaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    strongEaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t  * t * t * t + 1 ) + b;
    },
    sineaseIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    sineaseOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t  * t + 1 ) + b;
    }
};




// 定义动画类
var Animate = function(dom) {
    this.dom = dom; // 运动的dom节点
    this.startTime = 0; // 动画开始的时间
    this.startPos = 0; // 动画开始时 dom位置
    this.endPos = 0; // 动画结束时 dom位置
    this.propertyName = null; // domj节点需要改变的css属性名
    this.easing = null; // 缓动算法
    this.duration = null; // 动画持续时间
}


// start负责启动动画，记录相关信息，供计算小球当前位置使用，和负责定时器 
Animate.prototype.start = function(propertyName, endPos, duration, easing) {
    this.startTime = +new Date(); // 动画启动时间
    this.startPos = this.dom.getBoundingClientRect()[propertyName] // dom节点初始位置
    this.propertyName = propertyName
    this,endPos = endPos
    this.duration = duration
    this.easing = tween[easing]

    var _this = this
    var timeId = setInterval(function() {
        if (_this.step() === false) {
            clearInterval(timeId)
        }
    }, 19)
}

// step 该方法代表每一帧做的事情
Animate.prototype.step = function() {
    var t = +new Date()
    if ( t > this.startTime + this.duration) {
        this.update(this.endPos)  // 更新css属性
        return false
    }

    var pos = this.easing(t - this.startTime, this.startPos, this.endPos, this.duration)
    //
    this.update(pos)
}


Animate.prototype.update = function(pos) {
    this.dom.style[this.propertyName] = pos + 'px'
}

