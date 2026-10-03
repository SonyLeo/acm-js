const test = require('node:test');
const assert = require('node:assert/strict');
const { restoreMessage } = require('../solutions/packet-reassembly');

test('公开样例：乱序报文按末尾索引恢复', () => {
  const segments = ['rolling3', 'stone4', 'like1', 'a2'];
  assert.equal(restoreMessage(segments), 'like a rolling stone');
});

test('边界：索引有多位数字', () => {
  const segments = ['ten10', 'one1', 'two2'];
  assert.equal(restoreMessage(segments), 'one two ten');
});

test('边界：只有一个报文段', () => {
  assert.equal(restoreMessage(['hello1']), 'hello');
});
