const test = require('node:test');
const assert = require('node:assert/strict');
const { sortLettersInPlace } = require('../solutions/HJ26');

test('公开样例：字母忽略大小写排序，非字母留在原位', () => {
  assert.equal(
    sortLettersInPlace('A Famous Saying: Much Ado About Nothing (2012/8).'),
    'A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).',
  );
});

test('边界：同一字母的大小写保持输入顺序', () => {
  assert.equal(sortLettersInPlace('bBaA'), 'aAbB');
});

test('边界：没有字母时原样返回', () => {
  assert.equal(sortLettersInPlace('123-!?'), '123-!?');
});
