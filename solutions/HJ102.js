const fs = require('fs');

// HJ102 字符统计
// 输入：一行字符串。
// 输出：每种字符只输出一次，按出现次数从高到低排列；频次相同时按 ASCII 码从小到大排列。
// 本地示例：
// 1. aaddccdc -> cda
// 2. bbaacc -> abc
// 3. Zz9Z9 -> 9Zz
const input = fs.readFileSync(0, 'utf8').trimEnd();

// TODO: 统计字符频次；按“频次降序、字符 ASCII 升序”排序；拼接字符输出。

// 思路： 1. 先按照 ASCII 码升序排列 2. 统计频次  3. 自定义 sort 4. 拼接字符输出
const map = new Map();

for (const char of input) {
    map.set(char, (map.get(char) || 0) + 1);
}

const result = [...map.entries()]
    .sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }

        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    })
    .map(([char]) => char)
    .join('');

console.log(result);
