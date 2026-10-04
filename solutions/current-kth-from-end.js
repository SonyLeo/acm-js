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
  // TODO:
  // 1. 准备 fast 和 slow，初始都指向 head。
  // 2. fast 先走 k 步。
  // 3. fast、slow 一起走到 fast 为 null。
  // 4. slow 所在节点就是倒数第 k 个，返回 slow.value。
}

module.exports = { kthFromEnd };
