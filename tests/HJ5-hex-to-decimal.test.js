const test = require('node:test');
const assert = require('node:assert/strict');
const { hexToDecimal } = require('../solutions/HJ5-hex-to-decimal');

test('公开样例：多位十六进制数', () => {
  assert.equal(hexToDecimal('0X1A'), 26);
});

test('边界：最小值', () => {
  assert.equal(hexToDecimal('0x0'), 0);
});

test('边界：小写字母与大写前缀', () => {
  assert.equal(hexToDecimal('0Xff'), 255);
});
