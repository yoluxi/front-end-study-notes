/**
 * 二分查找
 * @param {*} arr 
 * @param {*} num 
 */

 // 给定一个有序数组 一个需要查找的值
 // 需要两个定位符 lo hi  
 // 判断查找的值与数组中间值的大小 判断所属与那个区间  然后调整定位符  进行迭代
 // 如果数组中存在需要查找的值 返回在数组的索引 否则返回-1 
function binarySearch(arr, num) {
    let lo = 0
    let hi = arr.length - 1
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (num < arr[mid]) {
            hi = mid - 1
        } else if (num > arr[mid]) {
            lo = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

let index = binarySearch(arr, 4)
console.log(index)
index =  binarySearch(arr, 3)
console.log(index)