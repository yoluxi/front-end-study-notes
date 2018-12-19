function deepClone(obj) {
    let copy
    if (null == obj || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        copy = new Date()
        copy.setTime(obj.getTime())
        return copy
    }
    
    if (obj instanceof Function) {
        copy = function() {
           return obj.call(this, arguments)
        }
        return copy
    }

    if (obj instanceof Array) {
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i])
        }
        return copy
    }


    if (obj instanceof Object) {
        copy = {}
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                copy[k] = deepClone(obj[k])
            }
        }
        return copy
    }

    throw new Error("Unable to copy obj as type isn't supported" + obj.constructor.name)
}