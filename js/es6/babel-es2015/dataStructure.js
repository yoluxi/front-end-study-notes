// Map + Set + WeakMap + WeakSet
// 为常见算法的实现提供了更有效的数据结构。WeakMaps提供了对对象的弱引用（不会被垃圾回收计数）。


// Sets
var s = new Set();
s.add("hello").add("goodBye").add("hello")
s.size === 2
s.has("hello") === true


// Maps
var map = new Map();
map.set("hello", 42)
map.set("s", 34)
map.get("s") == 34

// weakMaps
var wm = new WeakMap()
vm.set(s, {extra: 42})
vm.size === undefined

// weakSets
var ws = new WeakSet()
ws.add({data: 42})
// 由于传入的对象没有其他引用 故将不会被set保存



