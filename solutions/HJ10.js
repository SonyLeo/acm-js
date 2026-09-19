const fs = require('fs');

// HJ10 字符个数统计
// 输入：一行 ASCII 字符串。
// 输出：其中不同字符的数量；大小写和空格视为不同字符。
// 注意：保留输入中的空格，只移除文件结尾的换行。
const input = fs.readFileSync(0, 'utf8').replace(/[\r\n]+$/, '');

// TODO: 记录出现过的字符，计算不同字符数量并输出。
const set = new Set(input);

console.log(set.size);
