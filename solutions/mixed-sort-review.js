// 数字字母混合排序闭卷复写
// 题意：数字按升序放回原来的数字位置；字母按“小写整体在大写之前、
// 同类按字符升序”放回原来的字母位置。

/**
 * @param {string} s 只包含数字和英文字母
 * @returns {string}
 */
function sortMixed(s) {
  let letters = [];
  let digits = [];
  let isDigits = [];

  for (let i = 0; i < s.length; i++) {
    let isDigit = false;
    if (s[i] >= '0' && s[i] <= '9') {
      digits.push(s[i]);
      isDigit = true;
    } else {
      letters.push(s[i]);
    }
    isDigits.push(isDigit);
  }

  digits.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  letters.sort((a, b) => {
    const aLower = a >= 'a' && a <= 'z';
    const bLower = b >= 'a' && b <= 'z';

    if (aLower !== bLower) return aLower ? -1 : 1;
    return a.charCodeAt(0) - b.charCodeAt(0);
  });

  const result = [];
  let digitIndex = 0;
  let letterIndex = 0;
  for (const isDigit of isDigits) {
    result.push(isDigit ? digits[digitIndex++] : letters[letterIndex++]);
  }

  return result.join('');
}

module.exports = { sortMixed };
