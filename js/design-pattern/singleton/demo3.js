var singletonTester = (function(){
    function Singleton( options ) {
        options = options || {}

        // 设置一些属性为我们的单例
        this.name = 'singletonTester'
        this.pointX = options.pointX || 6
        this.pointY = options.pointY || 8

    }

    var instance

    //
    var _static = {
        name: 'singletonTester',
        // 获取实例的方法
        getInstance: function ( options ) {
            if ( instance === undefined ) {
                instance = new Singleton(options)
            }
            return instance
        }
    }

    return _static
})()