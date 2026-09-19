const fs = require('fs');

// HJ23 删除字符串中出现次数最少的字符
// 输入：一行字符串。
// 输出：删除所有出现次数最少的字符后，按原顺序输出剩余字符串。
// 本地示例：
// 1. aabcddd -> aaddd
// 2. aabbcc -> （空输出）
// 3. abaccdeff -> aaccff
const input = fs.readFileSync(0, 'utf8').trim();

// TODO: 统计每个字符的频次，找出最小频次，再按原顺序保留其他字符。
const counter = new Map();

for (const num of input) {
    counter.set(num, (counter.get(num) || 0) + 1);
}

const minIndex = Math.min(...counter.values());
let result = []

for (const char of input) {
    if (counter.get(char) !== minIndex) {
        result.push(char)
    }
}

console.log(result.join(''));
