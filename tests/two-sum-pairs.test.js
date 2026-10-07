const test = require('node:test');
const assert = require('node:assert/strict');
const { findTwoSumPairs } = require('../solutions/two-sum-pairs');

test('公开样例：找到一个索引对', () => {
  assert.deepEqual(findTwoSumPairs([2, 7, 11, 15], 9), [[0, 1]]);
});

test('隐藏模拟：存在多个不同索引对', () => {
  assert.deepEqual(findTwoSumPairs([1, 2, 3, 4, 5], 6), [
    [0, 4],
    [1, 3],
  ]);
});

test('隐藏模拟：相同数值但下标不同，分别计入组合', () => {
  assert.deepEqual(findTwoSumPairs([3, 3, 3], 6), [
    [0, 1],
    [0, 2],
    [1, 2],
  ]);
});
