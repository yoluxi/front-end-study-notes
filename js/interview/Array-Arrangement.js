/**
 * 数组全排列
 */

function fn(doubleArray) {
    return doubleArray.reduce((data, e) => {
        return concatArr(data, e)
    })
}


function concatArr(arr1, arr2) {
    return arr1.reduce((data, ele) => {
        data = data.concat(arr2.map(e => ele + e));
        return data
    }, [])
}


var arr = [
    ['a', 'b'],
    ['A']
]

console.log(fn(arr))


// fn执行
// 执行            累加值                   当前值             数组              返回结果
// 1               ['a', 'b']                 ['A']            'arr'           'concatArr1, 2'    ['aA', 'bA']



// concatArr执行
// 执行            累加值                   当前值             数组              返回结果  
// 1                  []                       'a'           ['a', 'b']          'concat1'  
// 2                 ['aA']                    'b'           ['a', 'b']          'concat2'  

// concat执行
// 执行            
// 1     'a'  => [].concat['aA']  => ['aA']
// 2     'b'  => ['aA'].concat['bA']  => ['aA', 'bA']
