// 固定长度子数组最大和
// 参数：nums，数字数组；k，窗口固定长度，且 1 <= k <= nums.length。
// 返回：所有长度恰好为 k 的连续子数组中，元素和的最大值。
// 示例：maxFixedWindowSum([2, 1, 5, 1, 3, 2], 3) -> 9，对应窗口 [5, 1, 3]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function maxFixedWindowSum(nums, k) {
  // TODO:
  // 1. 使用 windowSum 维护当前窗口元素和，left 表示窗口左边界。
  // 2. right 每次向右加入一个 nums[right]。
  // 3. 若窗口长度超过 k，移出 nums[left]，再让 left++。
  // 4. 窗口长度恰好等于 k 时，用 windowSum 更新最大和。

  let left = 0;
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right]

    if(right - left + 1 > k) {
      windowSum -= nums[left]
      left++
    }

    if(right - left + 1 === k) {
      maxSum = Math.max(maxSum, windowSum)
    }
  }

  return maxSum;
}

module.exports = { maxFixedWindowSum };
