const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidBrackets } = require('../solutions/valid-brackets');

test('公开样例：不同类型括号可正确嵌套', () => {
  assert.equal(isValidBrackets('([]){}'), true);
});

test('隐藏模拟：交叉嵌套无效', () => {
  assert.equal(isValidBrackets('([)]'), false);
});

test('隐藏模拟：左括号有遗留', () => {
  assert.equal(isValidBrackets('(([]'), false);
});

test('边界：空字符串有效', () => {
  assert.equal(isValidBrackets(''), true);
});
