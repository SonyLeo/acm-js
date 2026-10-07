const test = require('node:test');
const assert = require('node:assert/strict');
const { kthFromEnd } = require('../solutions/kth-from-end');

function buildList(values) {
  let head = null;
  for (let i = values.length - 1; i >= 0; i--) {
    head = { value: values[i], next: head };
  }
  return head;
}

test('公开样例：五个节点，倒数第二个', () => {
  assert.equal(kthFromEnd(buildList([1, 2, 3, 4, 5]), 2), 4);
});

test('隐藏模拟：k 等于链表长度，返回头节点', () => {
  assert.equal(kthFromEnd(buildList([7, 8, 9]), 3), 7);
});

test('隐藏模拟：边界，只有一个节点', () => {
  assert.equal(kthFromEnd(buildList([42]), 1), 42);
});
