const test = require('node:test');
const assert = require('node:assert/strict');
const { minBitFlips } = require('../solutions/min-bit-flips');

test('公开样例：多个二进制位不同', () => {
  assert.equal(minBitFlips(10, 7), 3);
});

test('边界：两个数字相同', () => {
  assert.equal(minBitFlips(5, 5), 0);
});

test('边界：只需翻转最高位', () => {
  assert.equal(minBitFlips(0, 8), 1);
});
