const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trimEnd();

// TODO: 输出最后一个单词的长度。
// 提示：题目保证至少有一个单词，先考虑从字符串末尾向前扫描。

const tokens = input ? input.split(/\s+/) : [];

console.log(tokens.length > 0 ? tokens[tokens.length - 1].length : 0);
