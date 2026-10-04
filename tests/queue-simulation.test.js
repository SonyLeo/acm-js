const test = require('node:test');
const assert = require('node:assert/strict');
const { simulateQueue } = require('../solutions/queue-simulation');

test('公开样例：查看队首后出队', () => {
  const operations = [
    { type: 'enqueue', value: 10 },
    { type: 'enqueue', value: 20 },
    { type: 'front' },
    { type: 'dequeue' },
    { type: 'front' },
  ];

  assert.deepEqual(simulateQueue(operations), [10, 10, 20]);
});

test('隐藏模拟：出队后继续入队', () => {
  const operations = [
    { type: 'enqueue', value: 5 },
    { type: 'enqueue', value: 8 },
    { type: 'dequeue' },
    { type: 'enqueue', value: 12 },
    { type: 'dequeue' },
    { type: 'front' },
  ];

  assert.deepEqual(simulateQueue(operations), [5, 8, 12]);
});

test('隐藏模拟：只有一次入队和出队', () => {
  assert.deepEqual(simulateQueue([
    { type: 'enqueue', value: 42 },
    { type: 'dequeue' },
  ]), [42]);
});
