const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();

// TODO: 将十六进制字符串转换为十进制整数并输出。
// 输入形式类似 0xA 或 0X1A。

const result = parseInt(input, 16)

console.log(result)