// 两数之和：返回所有索引对
// 参数：nums，数字数组；target，目标和。
// 返回：所有满足 nums[i] + nums[j] === target 的索引对 [i, j]，其中 i < j。
// 索引对按 i、j 的遍历顺序返回；不同下标即使数值相同，也属于不同组合。
// 示例：findTwoSumPairs([2, 7, 11, 15], 9) -> [[0, 1]]。

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function findTwoSumPairs(nums, target) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if((nums[i] + nums[j]) === target) {
        result.push([i, j])
      }
    }
  }

  return result;
}

module.exports = { findTwoSumPairs };
