const fs = require('fs');

let n = fs.readFileSync(0, 'utf8').trim();

// TODO: 求解指定整数的所有质因数。
  
let factor = 2;
const factors = []

while(factor * factor <= n) {
    while(n % factor === 0) {
        factors.push(factor)
        n = n / factor
    }

    factor += 1
}

if(n > 1) factors.push(n)

console.log(factors.join(" "))