const test = require('node:test');
const assert = require('node:assert/strict');
const { sortCharsByFrequency } = require('../solutions/HJ102-character-sort');

test('公开样例：频次降序，相同频次按 ASCII 升序', () => {
  assert.equal(sortCharsByFrequency('aaddccdc'), 'cda');
});

test('边界：所有字符频次相同时按 ASCII 升序', () => {
  assert.equal(sortCharsByFrequency('cbBa'), 'Babc');
});

test('边界：只有一种字符', () => {
  assert.equal(sortCharsByFrequency('zzzz'), 'z');
});
