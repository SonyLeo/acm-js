// 最多翻转一位的最长连续目标值
// 参数：target，目标值（0 或 1）；bits，只由 0、1 组成的数组。
// 返回：最多将一个非 target 值翻转为 target 后，连续 target 的最大长度。
// 示例：maxConsecutiveTarget(1, [0, 1, 1, 0, 1, 0, 1]) -> 4。

/**
 * @param {0 | 1} target
 * @param {(0 | 1)[]} bits
 * @returns {number}
 */
function maxConsecutiveTarget(target, bits) {
    // TODO:
    // 1. 使用滑动窗口 [left, right]，窗口内最多允许一个非 target 值。
    // 2. right 从左到右扩展；遇到非 target 值，记录其数量。
    // 3. 当非 target 值超过一个时，持续移动 left 缩小窗口。
    // 4. 每轮更新窗口长度的最大值。

    let left = 0;
    let nonTargetCount = 0;
    let maxLength = 0;

    for (let right = 0; right < bits.length; right++) {
        // 1. 把 bits[right] 纳入窗口，若不是 target, 则 nonTargetValue++
        if (bits[right] !== target) {
            nonTargetCount++;
        }

        // 2. 移除 bits[left]
        while (nonTargetCount > 1) {
            if (bits[left] !== target) {
                nonTargetCount--;
            }
            left++;
        }

        // 3.此时窗口合法，更新最大值
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = { maxConsecutiveTarget };
