// 子数组和等于目标值的数量
// 参数：nums，数字数组；target，目标和。
// 返回：所有连续子数组中，元素和恰好等于 target 的子数组数量。
// 示例：countSubarraysWithSum([1, 1, 1], 2) -> 2，对应 [1, 1]（下标 0-1 与 1-2）。

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function countSubarraysWithSum(nums, target) {
  // TODO:
  // 1. prefixSum 表示从开头累加到当前元素的和；countMap 记录每个前缀和出现次数。
  // 2. 先记录前缀和 0 出现一次，代表“从下标 0 开始”的空前缀。
  // 3. 遍历每个 num：更新 prefixSum；查找 prefixSum - target 出现过几次，并累加到答案。
  // 4. 再将当前 prefixSum 的出现次数加一。顺序不能颠倒。
}

module.exports = { countSubarraysWithSum };
