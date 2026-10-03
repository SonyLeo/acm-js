// LeetCode 2220：将 start 转换为 goal 所需的最少位翻转次数。
// 一次操作只能翻转一个二进制位。
// 示例：minBitFlips(10, 7) -> 3，因为 1010 与 0111 有 3 位不同。

/**
 * @param {number} start 非负整数
 * @param {number} goal 非负整数
 * @returns {number}
 */
function minBitFlips(start, goal) {
  let x = start ^ goal;
  let count = 0

  while(x !== 0) {
    if((x & 1) === 1) {
      count++
    }

    x >>>= 1
  }

  return count;
}

module.exports = { minBitFlips };
