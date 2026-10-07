const test = require('node:test');
const assert = require('node:assert/strict');
const { twoSumSorted } = require('../solutions/two-sum-sorted');

test('公开样例：答案在数组中间', () => {
  assert.deepEqual(twoSumSorted([1, 2, 4, 7, 11], 9), [1, 3]);
});

test('隐藏模拟：包含负数', () => {
  assert.deepEqual(twoSumSorted([-8, -3, 1, 4, 9], 1), [0, 4]);
});

test('隐藏模拟：不存在满足目标和的数对', () => {
  assert.deepEqual(twoSumSorted([1, 3, 5, 8], 10), []);
});
