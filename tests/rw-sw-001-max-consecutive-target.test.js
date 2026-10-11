const test = require('node:test');
const assert = require('node:assert/strict');
const { maxConsecutiveTarget } = require('../solutions/rw-sw-001-max-consecutive-target');

test('公开样例 1：翻转中间的 0，得到连续 4 个 1', () => {
  assert.equal(maxConsecutiveTarget(1, [0, 1, 1, 0, 1, 0, 1, 0, 0]), 4);
});

test('公开样例 2：全部已经是目标 0', () => {
  assert.equal(maxConsecutiveTarget(0, [0, 0, 0, 0, 0, 0, 0, 0]), 8);
});

test('公开样例 3：target 为 0 时翻转一个 1', () => {
  assert.equal(maxConsecutiveTarget(0, [1, 0, 1, 0, 1]), 3);
});

test('隐藏模拟：边界，单个元素已经是目标值', () => {
  assert.equal(maxConsecutiveTarget(1, [1]), 1);
});

test('隐藏模拟：交替出现，最佳窗口跨过一个可翻转元素', () => {
  assert.equal(maxConsecutiveTarget(1, [0, 1, 0, 1, 0]), 3);
});
