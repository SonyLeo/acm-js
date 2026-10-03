// 统计出现次数不少于阈值的字符。
// 返回满足次数 >= k 的字符，按字典序拼接成字符串。
// 示例：findFrequentChars('aabbccd', 2) -> 'abc'。

/**
 * @param {string} text
 * @param {number} k
 * @returns {string}
 */
function findFrequentChars(text, k) {
  const counter = new Map()
  for (const char of text) {
    counter.set(char, (counter.get(char) || 0) + 1)
  }

  const result = [];
  for(const [char, count] of counter) {
    if(count >= k) {
      result.push(char)
    }
  }

  return result.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
}

module.exports = { findFrequentChars };
