var myBadSingleton = (function () {
    var instance = ''
    function init() {
        var privateFun = function () {
            console.log('private')
        }
        var privateVariable = ''
        var privateRandom = Math.random()
        return {
            publicVariable: 'public',
            publicFun: function () {
                return 'public'
            },
            getRandomNum: function () {
                return privateRandom
            }
        }
    }
    return {
        getInstance: function () {
            instance = init()
            return instance
        }
    }
})()