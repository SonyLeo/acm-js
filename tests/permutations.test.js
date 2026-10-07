const test = require('node:test');
const assert = require('node:assert/strict');
const { permutations } = require('../solutions/permutations');

test('公开样例：三个元素共有六种排列', () => {
  assert.deepEqual(permutations([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});

test('隐藏模拟：边界，只有一个元素', () => {
  assert.deepEqual(permutations([7]), [[7]]);
});

test('隐藏模拟：两个元素的顺序不同是不同排列', () => {
  assert.deepEqual(permutations([4, 5]), [
    [4, 5],
    [5, 4],
  ]);
});
