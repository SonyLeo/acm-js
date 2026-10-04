// HJ13 句子逆序
// 参数：sentence，一个由单词和空格组成的字符串。
// 返回：将单词顺序颠倒、单词内部字符顺序保持不变的新句子。
// 示例：reverseWords('I am a boy') -> 'boy a am I'；reverseWords('hello') -> 'hello'。

/**
 * @param {string} sentence
 * @returns {string}
 */
function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}

module.exports = { reverseWords };
