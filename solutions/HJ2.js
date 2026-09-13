const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trimEnd();
const lines = input.split(/\r?\n/);

// TODO: 忽略大小写，输出第二行字符在第一行出现的次数。

const target = lines[1].toUpperCase();
let counter = 0;

for (const char of lines[0]) {
    if(char.toUpperCase() === target) counter++;   
}


console.log(counter)