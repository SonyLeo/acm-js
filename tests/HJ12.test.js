const test = require('node:test');
const assert = require('node:assert/strict');
const { reverseString } = require('../solutions/HJ12');

test('公开样例：普通英文字母', () => {
  assert.equal(reverseString('abcd'), 'dcba');
});

test('隐藏模拟：字符串中包含空格', () => {
  assert.equal(reverseString('hello world'), 'dlrow olleh');
});

test('隐藏模拟：边界，单个字符', () => {
  assert.equal(reverseString('A'), 'A');
});
