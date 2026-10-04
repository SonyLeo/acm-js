const test = require('node:test');
const assert = require('node:assert/strict');
const { minOfColumnMaxes } = require('../solutions/column-max-min-rewrite');

test('公开样例：三行三列', () => {
  assert.equal(minOfColumnMaxes([
    [3, 1, 7],
    [2, 8, 4],
    [5, 6, 9],
  ]), 5);
});

test('隐藏模拟：边界，只有一行', () => {
  assert.equal(minOfColumnMaxes([[4, 2, 6]]), 2);
});

test('隐藏模拟：全部为负数', () => {
  assert.equal(minOfColumnMaxes([
    [-5, -2],
    [-3, -4],
    [-6, -1],
  ]), -3);
});
