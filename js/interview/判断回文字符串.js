function palindrome(str) {
    if (typeof str !== 'string' ) {
        return
    }

    let arr = str.split('')
    return arr.reverse().join('') === str
}   

console.log(palindrome('11111'))



// todo 利用二分法 查找