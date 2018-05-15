var myImage = (function(){
    var imageNode = document.createElement('img')
    document.body.appendChild(imageNode)
    return {
        setImgSrc = function(src) {
            imageNode.src = src
        }
    }
})()


var proxyImage = function(src) {
    var img = new Image()
    img.load = function() {
        myImage.setImgSrc(src)
    }
    return {
        setImgSrc: function(src) {
            myImage.setImgSrc('xxx.gif')
            img.src = src
        }
    }
}

proxyImage.setImgSrc('target.png')

// 单一指责原则 一个类 应该仅有只有一个引起它变化的原因  

