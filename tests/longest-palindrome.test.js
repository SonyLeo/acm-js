const test = require('node:test');
const assert = require('node:assert/strict');
const { longestPalindrome } = require('../solutions/longest-palindrome');

test('公开样例：奇数长度回文', () => {
  assert.ok(['bab', 'aba'].includes(longestPalindrome('babad')));
});

test('隐藏模拟：偶数长度回文', () => {
  assert.equal(longestPalindrome('cbbd'), 'bb');
});

test('隐藏模拟：边界，整个字符串都是回文', () => {
  assert.equal(longestPalindrome('racecar'), 'racecar');
});

test('隐藏模拟：最长回文不在整串中心', () => {
  assert.equal(longestPalindrome('xyabccz'), 'cc');
});
