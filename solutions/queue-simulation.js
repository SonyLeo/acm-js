// 基础队列模拟
// 参数：operations，按顺序执行的队列操作数组。
// - { type: 'enqueue', value: number }：将 value 入队。
// - { type: 'dequeue' }：队首元素出队，并把该元素记入结果。
// - { type: 'front' }：查看队首元素，并把该元素记入结果。
// 题目保证执行 dequeue、front 时队列非空。
// 返回：所有 dequeue 和 front 操作得到的值，按发生顺序组成的数组。
//
// 示例：
// simulateQueue([
//   { type: 'enqueue', value: 10 },
//   { type: 'enqueue', value: 20 },
//   { type: 'front' },
//   { type: 'dequeue' },
// ]) -> [10, 10]

/**
 * @param {({ type: 'enqueue', value: number } | { type: 'dequeue' } | { type: 'front' })[]} operations
 * @returns {number[]}
 */
function simulateQueue(operations) {
  const queue = [];
  const results = [];
  let head = 0;

  for (const operation of operations) {
    if(operation.type === 'enqueue') {
      queue.push(operation.value);
    } else if(operation.type === 'front') {
      results.push(queue[head]);
    } else if (operation.type === 'dequeue') {
      results.push(queue[head]);
      head++;
    }
  }

  return results;
}

module.exports = { simulateQueue };
