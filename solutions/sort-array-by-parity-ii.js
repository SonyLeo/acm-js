// LeetCode 922 按奇偶排序数组 II
// 参数：nums，一个长度为偶数的整数数组，奇数和偶数数量相等。
// 返回：重新排列后的数组，使偶数下标放偶数，奇数下标放奇数。
// 允许返回新数组；不要求保持相同数字的相对顺序。
// 示例：[4, 2, 5, 7] -> [4, 5, 2, 7]（任意合法结果均可）。

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function sortArrayByParityII(nums) {
    let j = 1;
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] % 2 === 1) {
            while (nums[j] % 2 === 1) j += 2;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums;
}

module.exports = { sortArrayByParityII };
