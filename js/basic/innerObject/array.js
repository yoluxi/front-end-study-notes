/**
 * Array.prototype.reduce(callback[, initialValue ])
 * @param callback 回调函数 包括以下四个参数
 *        @param accumulator 累加器累加回调的返回值, 就是上一步的返回值 或者initialValue 
 *        @param currentValue  当前值
 *        @param currentIndex  当前索引
 *        @param array  调用reduce的数组 
 * @param initialValue 初始化值 作为第一个调用callback函数的accumulator的值，如果不存在该参数 默认是数组的第一个值，如果为空数组，reduce调用则报错
 */



[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});

/**
 * 执行次序  accumulator  currentValue  currentIndex    array      return 
 * 第一次      0              0             0         [0,...4]       0
 * 第二次      0              1             1         [0,...4]       1
 * 第三此      1              2             2         [0,...4]       3
 * 第四次      3              3             3         [0,...4]       6
 * 第五次      6              4             4         [0,...4]       10 
 * 
 * 
 * 所以最后的返回结果是10
 */


var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


// 分析  
// 首先要创建一个对象，判断这个对象是否存在这个key 如果有就加1 并返回这个对象 

names.reduce(function(pre, cur){
    if (pre[cur]) {
        pre[cur] += 1
    } else {
        pre[cur] = 1
    }
    return pre;
}, {})




// 数组去重
var arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
// 如果当前数组 不存在该值 就push  否则就什么都不做 



var a = arr.reduce(function(arr, value){
    if (arr.indexOf(value) === -1) {
        arr.push(value)
    } 
    return arr;
}, []).sort()
console.log(a)