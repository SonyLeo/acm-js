const test = require('node:test');
const assert = require('node:assert/strict');
const { binarySearch } = require('../solutions/binary-search');

test('公开样例：找到位于数组中间的目标', () => {
    assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
});

test('边界：目标不存在时返回 -1', () => {
    assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
});

test('边界：单元素数组', () => {
    assert.equal(binarySearch([5], 3), -1);
});
