/**
 * 观察者列表
 * @constructor
 */
function ObserverList() {
    this.observerList = []
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;
    while (i < this.observerList.length) {
        if ( this.observerList[i] === obj ) {
            return i;
        }
        i++
    }
    return -1;
}

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1)
}

/**
 * 主体
 * @constructor
 */
function Subject() {
    this.observes = new ObserverList()
}

Subject.prototype.addObserver = function (observer) {
    this.observes.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
    this.observes.removeAt(this.observes.indexOf(observer, 0))
}

Subject.prototype.notify = function (context) {
    var ObserverCount = this.observes.count()
    for (var i = 0; i < ObserverCount.length; i++) {
        this.observes.get(i).update(context)
    }
}

