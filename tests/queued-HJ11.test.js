const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseInteger } = require('../solutions/queued-HJ11');

test.skip('待练习：公开样例：末尾有多个 0', () => {
  assert.equal(reverseInteger(1516000), 6151);
});

test.skip('待练习：反转后只剩一个非零数字', () => {
  assert.equal(reverseInteger(1000), 1);
});

test.skip('待练习：边界：单个数字', () => {
  assert.equal(reverseInteger(7), 7);
});
