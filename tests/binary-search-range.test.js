const test = require('node:test');
const assert = require('node:assert/strict');
const { searchRange } = require('../solutions/binary-search-range');

test('公开样例：目标值连续重复多次', () => {
  assert.deepEqual(searchRange([1, 2, 2, 2, 3], 2), [1, 3]);
});

test('边界：目标不存在', () => {
  assert.deepEqual(searchRange([1, 3, 5, 7], 2), [-1, -1]);
});

test('边界：整个数组都是目标值', () => {
  assert.deepEqual(searchRange([4, 4, 4, 4], 4), [0, 3]);
});
