const fs = require('fs');

// HJ9 提取不重复的整数
// 输入：一个正整数。
// 输出：从右向左读取数字，保留每个数字第一次出现的顺序，并拼接输出。
// 本地示例：9876673 -> 37689；101203 -> 3021；7 -> 7。
const input = fs.readFileSync(0, 'utf8').trim();

// TODO: 从 input 末尾开始遍历，记录已经出现的数字并构造结果。
const seen = new Set()
const result = []

for(let i = input.length - 1; i >= 0; i -= 1) {
    const digital = input[i]

    if(seen.has(digital)) {
        continue;
    }

    seen.add(digital)
    result.push(digital)
}

console.log(result.join(""))
