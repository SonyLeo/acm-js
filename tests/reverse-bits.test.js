const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseBits } = require('../solutions/reverse-bits');

test('公开样例：颠倒一个 32 位整数', () => {
  assert.equal(reverseBits(43261596), 964176192);
});

test('边界：0 颠倒后仍为 0', () => {
  assert.equal(reverseBits(0), 0);
});

test('边界：最低位为 1 时变为最高位', () => {
  assert.equal(reverseBits(1), 2147483648);
});
