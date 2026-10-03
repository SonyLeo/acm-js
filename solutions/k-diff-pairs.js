// 给定差值的不重复数对。
// 返回数组中满足较大数 - 较小数 === k 的不重复数对数量。
// k 为非负整数；同一组数值只计一次。
// 示例：findPairs([3, 1, 4, 1, 5], 2) -> 2，数对为 (1, 3)、(3, 5)。

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function findPairs(nums, k) {
  if(k < 0) return 0

  const seen = new Set();
  const result = new Set();

  for (const number of nums) {
    if(seen.has(number - k)) result.add(number - k)
    if(seen.has(number + k)) result.add(number)
    seen.add(number)
  }

  return result.size
}

module.exports = { findPairs };
