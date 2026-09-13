const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trimEnd();

// TODO: 按 8 个字符分块；最后一块不足 8 个字符时补 0。

const targetLength = Math.ceil(input.length / 8) * 8;

const paddedInput = input.padEnd(targetLength, '0')

const chunks = paddedInput.match(/.{8}/g) || []

// 1. 字符串
// console.log(chunks.join(''))

console.log(chunks.join('\n'))