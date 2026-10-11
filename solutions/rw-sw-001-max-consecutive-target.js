// 最大连续目标值的个数（闭卷复写）
// 参数：target，目标值（0 或 1）；bits，只由 0、1 组成的数组。
// 返回：最多翻转一个元素后，连续 target 的最大长度。
// 示例：maxConsecutiveTarget(1, [0, 1, 1, 0, 1, 0, 1, 0, 0]) -> 4。
// 示例：maxConsecutiveTarget(0, [0, 0, 0, 0, 0, 0, 0, 0]) -> 8。
// 示例：maxConsecutiveTarget(0, [1, 0, 1, 0, 1]) -> 3。

/**
 * @param {0 | 1} target
 * @param {(0 | 1)[]} bits
 * @returns {number}
 */
function maxConsecutiveTarget(target, bits) {
    let maxlength = 0;
    let left = 0;
    let noTargetCount = 0;
    for (let right = 0; right < bits.length; right++) {
        if (bits[right] !== target) {
            noTargetCount++;
        }

        while (noTargetCount > 1) {
            if (bits[left] !== target) {
                noTargetCount--;
            }
            left++;
        }

        maxlength = Math.max(maxlength, right - left + 1);
    }
    return maxlength;
}

module.exports = { maxConsecutiveTarget };
