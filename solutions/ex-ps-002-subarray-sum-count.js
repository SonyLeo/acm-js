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
    let result = 0;
    let prefixSum = 0;
    let countMap = new Map([[0, 1]]);

    for (const num of nums) {
        prefixSum += num;

        const neededPrefixSum = prefixSum - target;
        result += countMap.get(neededPrefixSum) || 0;

        countMap.set(prefixSum, (countMap.get(prefixSum) || 0) + 1);
    }

    return result;
}

module.exports = { countSubarraysWithSum };
