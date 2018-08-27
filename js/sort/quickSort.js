function quickSort(arr, startIndex, endIndex) {
    // 递归结束条件 startIndex >= endIndex
    if (startIndex >= endIndex) {
        return;
    }

    // 得到基准元素位置
    var pivotIndex = partition(arr, startIndex, endIndex);

    // 用分治法递归数列的两部分
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex)

}


function partition(arr, startIndex, endIndex) {
    // 取第一个元素为基准元素
    var pivot = arr[startIndex];
    var left = startIndex;
    var right = endIndex;

    // 记录坑的位置
    var index = startIndex;

    // 大循环左右指针重合时结束
    while (right >= left) {
        // right指针从右向左进行比较
        while (right >= left) {
            if (arr[right] < pivot) {
                arr[left] = arr[right];
                index = right;
                left++;
                break;
            }
            right--;
        }

        // left指针从左向右进行比较
        while (right >= left) {
            if (arr[left] > pivot) {
                arr[right] = arr[left];
                index = left;
                right--;
                break;
            }
            left++
        }
    }

    // 
    arr[index] = pivot;
    return index;
}

var arr = [4, 7, 6, 5, 3, 2, 8, 1];
quickSort(arr, 0, arr.length - 1)
console.log(arr)