const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseInteger } = require('../solutions/current-HJ11');

test('公开样例：末尾有多个 0', () => {
  assert.equal(reverseInteger(1516000), 6151);
});

test('边界：反转后只剩一个非零数字', () => {
  assert.equal(reverseInteger(1000), 1);
});

test('边界：单个数字', () => {
  assert.equal(reverseInteger(7), 7);
});
