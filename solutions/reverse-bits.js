// LeetCode 190：颠倒一个 32 位无符号整数的二进制位。
// 例如最低位会变为结果的最高位。
// 示例：reverseBits(43261596) -> 964176192。

/**
 * @param {number} n 32 位无符号整数
 * @returns {number} 颠倒后的 32 位无符号整数
 */
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }

    return result >>> 0;
}

module.exports = { reverseBits };
