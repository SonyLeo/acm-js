const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseWords } = require('../solutions/HJ13');

test('公开样例：多个单词的句子逆序', () => {
  assert.equal(reverseWords('I am a boy'), 'boy a am I');
});

test('隐藏模拟：边界，只有一个单词', () => {
  assert.equal(reverseWords('hello'), 'hello');
});

test('隐藏模拟：多个连续空格也只分隔单词', () => {
  assert.equal(reverseWords('we  love   JavaScript'), 'JavaScript love we');
});
