const test = require('node:test');
const assert = require('node:assert/strict');
const { sortArrayByParityII } = require('../solutions/current-sort-array-by-parity-ii');

function assertValid(result, original) {
  assert.equal(result.length, original.length);

  for (let i = 0; i < result.length; i += 1) {
    assert.equal(result[i] % 2, i % 2);
  }

  assert.deepEqual([...result].sort((a, b) => a - b), [...original].sort((a, b) => a - b));
}

test('公开样例：偶数下标放偶数，奇数下标放奇数', () => {
  const input = [4, 2, 5, 7];
  assertValid(sortArrayByParityII(input), input);
});

test('边界：最小长度', () => {
  const input = [2, 3];
  assertValid(sortArrayByParityII(input), input);
});

test('边界：多个重复奇偶数', () => {
  const input = [3, 3, 2, 2, 5, 7, 4, 6];
  assertValid(sortArrayByParityII(input), input);
});
