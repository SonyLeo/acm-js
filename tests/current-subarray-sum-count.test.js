const test = require('node:test');
const assert = require('node:assert/strict');
const { countSubarraysWithSum } = require('../solutions/current-subarray-sum-count');

test.skip('待练习：公开样例：两个子数组的和等于目标值', () => {
  assert.equal(countSubarraysWithSum([1, 1, 1], 2), 2);
});

test.skip('待练习：包含负数与零', () => {
  assert.equal(countSubarraysWithSum([1, -1, 0], 0), 3);
});

test.skip('待练习：边界，完整数组恰好等于目标值', () => {
  assert.equal(countSubarraysWithSum([2, 3, -1], 4), 1);
});
