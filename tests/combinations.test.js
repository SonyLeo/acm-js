const test = require('node:test');
const assert = require('node:assert/strict');
const { combinations } = require('../solutions/combinations');

test('公开样例：从三个数中选两个', () => {
  assert.deepEqual(combinations([1, 2, 3], 2), [
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
});

test('隐藏模拟：边界，只选一个元素', () => {
  assert.deepEqual(combinations([4, 5], 1), [[4], [5]]);
});

test('隐藏模拟：k 等于数组长度', () => {
  assert.deepEqual(combinations([1, 2, 3], 3), [[1, 2, 3]]);
});
