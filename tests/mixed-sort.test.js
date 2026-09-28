const test = require('node:test');
const assert = require('node:assert/strict');
const { sortMixed } = require('../solutions/current-mixed-sort');

test('公开样例：数字升序，小写字母整体在大写前', () => {
  assert.equal(sortMixed('b1A2a3'), 'a1b2A3');
});

test('边界：多组数字和大小写字母', () => {
  assert.equal(sortMixed('d1C2b3A4a5'), 'a1b2d3A4C5');
});

test('边界：同类字符已经有序', () => {
  assert.equal(sortMixed('a1b2C3D4'), 'a1b2C3D4');
});
