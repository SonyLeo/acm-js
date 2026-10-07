const test = require('node:test');
const assert = require('node:assert/strict');
const { rangeSums } = require('../solutions/range-sum');

test('公开样例：查询两个不同区间', () => {
  assert.deepEqual(rangeSums([2, -1, 3, 4], [[0, 2], [1, 3]]), [4, 6]);
});

test('隐藏模拟：查询单个元素与完整数组', () => {
  assert.deepEqual(rangeSums([5, 2, 7], [[1, 1], [0, 2]]), [2, 14]);
});

test('隐藏模拟：数组中包含负数', () => {
  assert.deepEqual(rangeSums([-3, 4, -2, 6], [[0, 1], [1, 2], [2, 3]]), [1, 2, 4]);
});
