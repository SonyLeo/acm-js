const test = require('node:test');
const assert = require('node:assert/strict');
const { minOfColumnMaxes } = require('../solutions/exercise-column-max-min');

test('三行三列：先求列最大值再取最小值', () => {
  const matrix = [
    [3, 1, 7],
    [2, 8, 4],
    [5, 6, 9],
  ];

  assert.equal(minOfColumnMaxes(matrix), 5);
});

test('边界：只有一行', () => {
  assert.equal(minOfColumnMaxes([[4, 2, 6]]), 2);
});

test('边界：全部是负数', () => {
  const matrix = [
    [-5, -2],
    [-3, -4],
    [-6, -1],
  ];

  assert.equal(minOfColumnMaxes(matrix), -3);
});
