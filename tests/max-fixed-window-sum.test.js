const test = require('node:test');
const assert = require('node:assert/strict');
const { maxFixedWindowSum } = require('../solutions/max-fixed-window-sum');

test('公开样例：长度为三的窗口最大和', () => {
  assert.equal(maxFixedWindowSum([2, 1, 5, 1, 3, 2], 3), 9);
});

test('隐藏模拟：数组含负数', () => {
  assert.equal(maxFixedWindowSum([-4, -2, -7, -1], 2), -6);
});

test('隐藏模拟：边界，k 等于数组长度', () => {
  assert.equal(maxFixedWindowSum([3, 1, 4], 3), 8);
});
