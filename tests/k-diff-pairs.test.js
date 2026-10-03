const test = require('node:test');
const assert = require('node:assert/strict');
const { findPairs } = require('../solutions/k-diff-pairs');

test('公开样例：统计差值为 k 的不重复数对', () => {
  assert.equal(findPairs([3, 1, 4, 1, 5], 2), 2);
});

test('边界：k 为 0 时，只有出现至少两次的数才构成一对', () => {
  assert.equal(findPairs([1, 3, 1, 5, 4], 0), 1);
});

test('边界：重复数不能重复计数', () => {
  assert.equal(findPairs([1, 1, 1, 3, 3], 2), 1);
});
