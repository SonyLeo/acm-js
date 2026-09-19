const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();

// TODO: 求解合并表记录。

const tokens = input.split(/\s+/).map(Number);

const length = tokens[0];
let position = 1;
const map = new Map();

for (let i = 0; i < length; i += 1) {
    const index = tokens[position];
    position += 1;

    const value = tokens[position];
    position += 1;

    map.set(index, (map.get(index) ?? 0) + value);
}

const result = [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([index, value]) => `${index} ${value}`)
    .join('\n');

console.log(result);
