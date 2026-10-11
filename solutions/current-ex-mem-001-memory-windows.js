// 合法内存记录的受限总占用窗口
// 参数：memory，非负整数数组；valueRange，[minValue, maxValue]；limit，最大总和。
// 返回：所有元素值都在 valueRange 内且元素和不超过 limit 的非空连续子数组数量。
// 示例：countMemoryWindows([2, 0, 1, 0, 2], [0, 2], 2) -> 10。

/**
 * @param {number[]} memory
 * @param {[number, number]} valueRange
 * @param {number} limit
 * @returns {number}
 */
function countMemoryWindows(memory, valueRange, limit) {
  // TODO:
  // 1. 解构 valueRange，准备 left、windowSum、result。
  // 2. 右边界逐项扩张；遇到值越界时，重置窗口并从下一项重新开始。
  // 3. 加入合法值后，窗口和大于 limit 时持续移除左端元素。
  // 4. 窗口合法时，以当前 right 结尾的合法子数组数量为 right - left + 1。
}

module.exports = { countMemoryWindows };
