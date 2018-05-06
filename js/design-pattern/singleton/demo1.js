/**
 * 单例正确使用方式
 * @type {{getInstance}}
 */
var mySingleton = (function () {
    // 存储一个引用为这个单例
    var instance;

    function init() {
        // 单例
        // 私有方法和变量
        function privateMethod() {
            console.log("private")
        }

        var privateVariable = "private"
        var privateRandom = Math.random()

        return {
            // 公有的方法和变量
            publicMethod: function () {
                console.log('publice')
            },
            publicVariable: 'public',
            getRandomNum: function () {
                return privateRandom
            }
        }
    }

    return {
        //
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
})()

