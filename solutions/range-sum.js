// 区间和查询
// 参数：nums，数字数组；queries，每项为闭区间 [left, right]，且 0 <= left <= right < nums.length。
// 返回：每个查询对应的区间和，顺序与 queries 一致。
// 示例：rangeSums([2, -1, 3, 4], [[0, 2], [1, 3]]) -> [4, 6]。

/**
 * @param {number[]} nums
 * @param {[number, number][]} queries
 * @returns {number[]}
 */
function rangeSums(nums, queries) {
    // TODO:
    // 1. 构造长度为 nums.length + 1 的 prefixSums，且 prefixSums[0] = 0。
    // 2. prefixSums[i + 1] 表示 nums[0] 到 nums[i] 的元素和。
    // 3. 对每个 [left, right]，区间和为 prefixSums[right + 1] - prefixSums[left]。
    // 4. 返回全部查询结果。

    const prefixSums = [0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        prefixSums.push(sum);
    }

    const results = [];

    for (const [left, right] of queries) {
        results.push(prefixSums[right + 1] - prefixSums[left]);
    }

    return results;
}

module.exports = { rangeSums };
