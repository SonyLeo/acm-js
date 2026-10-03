const test = require('node:test');
const assert = require('node:assert/strict');
const { findFrequentChars } = require('../solutions/frequent-chars');

test('公开样例：筛选出现至少两次的字符并按字典序输出', () => {
  assert.equal(findFrequentChars('aabbccd', 2), 'abc');
});

test('边界：不同位置的字符按字典序而非出现顺序输出', () => {
  assert.equal(findFrequentChars('cccbbaa', 2), 'abc');
});

test('边界：没有字符达到阈值', () => {
  assert.equal(findFrequentChars('abc', 2), '');
});
