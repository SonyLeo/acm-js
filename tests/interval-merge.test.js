const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateMergedLength } = require('../solutions/interval-merge');

test('公开样例：重叠区间合并后计算总长度', () => {
  const intervals = [
    { start: 1, end: 5 },
    { start: 2, end: 6 },
    { start: 8, end: 10 },
    { start: 15, end: 18 },
  ];

  assert.equal(calculateMergedLength(intervals), 10);
});

test('边界：一个区间完全包含另一个区间', () => {
  const intervals = [
    { start: 1, end: 10 },
    { start: 3, end: 5 },
    { start: 4, end: 8 },
  ];

  assert.equal(calculateMergedLength(intervals), 9);
});

test('边界：输入无序时仍按起点扫描', () => {
  const intervals = [
    { start: 8, end: 10 },
    { start: 1, end: 5 },
    { start: 2, end: 6 },
  ];

  assert.equal(calculateMergedLength(intervals), 7);
});

test('边界：相邻的左闭右开区间不重叠', () => {
  const intervals = [
    { start: 1, end: 5 },
    { start: 5, end: 8 },
  ];

  assert.equal(calculateMergedLength(intervals), 7);
});

test('边界：单个区间', () => {
  const intervals = [{ start: -3, end: 4 }];

  assert.equal(calculateMergedLength(intervals), 7);
});
