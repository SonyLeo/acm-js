const test = require('node:test');
const assert = require('node:assert/strict');
const { countMemoryWindows } = require('../solutions/current-ex-mem-001-memory-windows');

test.skip('公开样例：全部值合法，统计总和不超过阈值的连续子数组', () => {
  assert.equal(countMemoryWindows([2, 0, 1, 0, 2], [0, 2], 2), 10);
});

test.skip('隐藏模拟：值越界会切断连续窗口', () => {
  assert.equal(countMemoryWindows([2, 3, 1, 0, 2], [0, 2], 2), 6);
});

test.skip('隐藏模拟：阈值为 0 时，只统计单独的零', () => {
  assert.equal(countMemoryWindows([0, 1, 0], [0, 1], 0), 2);
});
