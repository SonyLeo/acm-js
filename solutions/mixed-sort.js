// 数字字母混合排序变体
// 参数：s，只包含数字和英文字母。
// 返回：数字按升序放回数字位置；字母按“小写整体在大写之前、同类按字符升序”放回字母位置。
// 示例：sortMixed('b1A2a3') -> 'a1b2A3'。

/**
 * @param {string} s
 * @returns {string}
 */
function sortMixed(s) {
  // TODO: 分类提取、分别排序，再按原始类型回填。
  const letters = [];
  const digits = [];
  const isDigits = [];

  for (const char of s) {
    const isDigit = char >= '0' && char <= '9';
    if(isDigit) {
      digits.push(char)
    } else {
      letters.push(char)
    }
    isDigits.push(isDigit)
  }

  digits.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

  letters.sort((a, b) => {
    const aLower = a >= 'a' && a <= 'z';
    const bLower = b >= 'a' && b <= 'z';
    if(aLower !== bLower) return aLower ? -1 : 1;
    return a.charCodeAt(0) - b.charCodeAt(0)
  })

  const result = []
  let di = 0, li = 0;
  for (const isDigit of isDigits) {
    result.push(isDigit ? digits[di++] : letters[li++])
  }

  return result.join("")
}

module.exports = { sortMixed };
