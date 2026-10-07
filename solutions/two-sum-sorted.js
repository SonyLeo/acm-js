// 已排序数组的两数之和
// 参数：nums，非递减排序的数字数组；target，目标和。
// 返回：任意一组满足 nums[left] + nums[right] === target 的索引 [left, right]；若不存在，返回 []。
// 示例：twoSumSorted([1, 2, 4, 7, 11], 9) -> [1, 3]，因为 2 + 7 = 9。

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumSorted(nums, target) {
    // TODO:
    // 1. left 指向开头，right 指向结尾。
    // 2. 计算 nums[left] + nums[right]。
    // 3. 等于 target：返回 [left, right]。
    // 4. 小于 target：left++；大于 target：right--。
    // 5. 指针相遇仍未找到，返回 []。
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

module.exports = { twoSumSorted };
