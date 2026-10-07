// 长度为 k 的组合枚举
// 参数：nums，元素互不重复的数字数组；k，选取的元素个数。
// 返回：从 nums 中选出恰好 k 个元素的所有组合；同一组元素不因顺序不同而重复。
// 示例：combinations([1, 2, 3], 2) -> [[1, 2], [1, 3], [2, 3]]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[][]}
 */
function combinations(nums, k) {
    const results = [];
    const path = [];

    function backtrack(start) {
        if (path.length === k) {
            results.push([...path]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1);
            path.pop();
        }
    }

    backtrack(0);
    return results;
}

module.exports = { combinations };
