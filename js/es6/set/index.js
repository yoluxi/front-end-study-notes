// set 类似数组 成员是唯一的   
const s = new Set();
[2,3,4,2].forEach(x => s.add(x))

for (let i in s) {
    console.log(i)
}