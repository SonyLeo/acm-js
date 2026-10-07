// 链表倒数第 k 个节点
// 参数：head，单链表头节点；k，正整数且不超过链表长度。
// 节点格式：{ value: number, next: ListNode | null }。
// 返回：倒数第 k 个节点的 value。
// 示例：链表 1 -> 2 -> 3 -> 4 -> 5，k = 2，返回 4。

/**
 * @typedef {{ value: number, next: ListNode | null }} ListNode
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @returns {number}
 */
function kthFromEnd(head, k) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while(fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.value;
}

module.exports = { kthFromEnd };
