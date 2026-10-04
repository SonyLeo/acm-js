// HJ11 数字颠倒
// 参数：value，一个非负整数。
// 返回：将十进制数字从右向左排列后的整数；反转后前导的 0 不保留。
// 示例：reverseInteger(1516000) -> 6151；reverseInteger(1000) -> 1；reverseInteger(7) -> 7。

/**
 * @param {number} value
 * @returns {number}
 */
function reverseInteger(value) {

  let n = value;
  let result = 0;

  while(n > 0) {
    const digit = n % 10;
    result = result * 10 + digit;
    n = Math.floor(n / 10)
  }

  return result;
}

module.exports = { reverseInteger };
