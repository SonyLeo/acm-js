const fs = require('fs');

// HJ80 整型数组合并
// 输入：两组整数。每组先输入数量，再输入对应数量的整数；所有数字可按任意空白分隔。
// 输出：合并两组整数、去重后按数值升序输出，数字之间用一个空格分隔。
// 本地示例：
// 1. 3 / 1 2 2 / 3 / 2 3 4 -> 1 2 3 4
// 2. 1 / -1 / 1 / -1 -> -1
// 3. 4 / 10 2 10 1 / 3 / 3 2 1 -> 1 2 3 10
const input = fs.readFileSync(0, 'utf8').trim();

// TODO: 读取两组整数，合并去重，按数值升序输出。

const init = input.split("\n")
const str1 = init[1]
const str2 = init[3]
const arr1 = str1.split(" ").map(Number)
const arr2 = str2.split(" ").map(Number)
const arr = [...arr1, ...arr2]
const set = new Set(arr)
const result = Array.from(set).sort((a,b) => a-b)
console.log(result.join(" "))
