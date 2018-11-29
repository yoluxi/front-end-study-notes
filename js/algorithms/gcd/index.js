/**
 * 求最大公约数
 * @param {*} p 
 * @param {*} q 
 */
// 传入 p , q
// 如果 q 是 0 则 p 是最大公约数
// 否则 r 为 p / q 的余数  最大公约数为 r 或 q中间的一个 
function gcd(p, q) {
    if ( q == 0) {
        return p
    }
    let r = p % q
    return gcd(q, r)
}

// test 
console.log(gcd(0,2))