// HJ5 十六进制转十进制。
// 输入为以 0x 或 0X 开头的十六进制整数字符串，返回对应十进制整数。
// 示例：hexToDecimal('0X1A') -> 26。

/**
 * @param {string} hex 以 0x 或 0X 开头的十六进制整数字符串
 * @returns {number}
 */
function hexToDecimal(hex) {
  return parseInt(hex, 16)
}

module.exports = { hexToDecimal };
