// HJ12 字符串反转
// 参数：text，一个普通字符串。
// 返回：将 text 的字符顺序完全反转后的新字符串。
// 示例：reverseString('abc') -> 'cba'；reverseString('hello world') -> 'dlrow olleh'。

/**
 * @param {string} text
 * @returns {string}
 */
function reverseString(text) {
  const charArr = text.split('');
  let left = 0;
  let right = charArr.length - 1;

  while(left  < right) {
    [charArr[left], charArr[right]] = [charArr[right], charArr[left]]

    left++;
    right--;
  }

  return charArr.join('')
}

module.exports = { reverseString };
