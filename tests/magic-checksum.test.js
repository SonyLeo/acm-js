const test = require('node:test');
const assert = require('node:assert/strict');
const { magicChecksum } = require('../solutions/magic-checksum');

test('公开样例：补齐后按四字节大端分组异或', () => {
  const bytes = ['61', '62', '63', '64', '32', '30', '31', '32', '4C', '61', '62'];
  assert.equal(magicChecksum(bytes), '1F3330A9');
});

test('边界：只有一个字节时在末尾补三个 FF', () => {
  assert.equal(magicChecksum(['01']), '01FFFFFF');
});

test('边界：相同的两个完整分组异或后为 0，输出固定八位', () => {
  const bytes = ['01', '02', '03', '04', '01', '02', '03', '04'];
  assert.equal(magicChecksum(bytes), '00000000');
});
