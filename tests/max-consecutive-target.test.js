const test = require('node:test');
const assert = require('node:assert/strict');
const { maxConsecutiveTarget } = require('../solutions/max-consecutive-target');

test('公开样例：目标为 1，窗口内最多翻转一个 0', () => {
  assert.equal(maxConsecutiveTarget(1, [0, 1, 1, 0, 1, 0, 1]), 4);
});

test('隐藏模拟：目标为 0，也可翻转一个 1', () => {
  assert.equal(maxConsecutiveTarget(0, [0, 1, 0, 0, 1, 0]), 4);
});

test('隐藏模拟：边界，全部已经是目标值', () => {
  assert.equal(maxConsecutiveTarget(1, [1, 1, 1]), 3);
});
