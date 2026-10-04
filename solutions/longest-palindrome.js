// 最长回文子串
// 参数：text，一个普通字符串。
// 返回：text 中任意一个最长回文子串；若有多个相同长度答案，返回任意一个。
// 示例：longestPalindrome('babad') -> 'bab' 或 'aba'；longestPalindrome('cbbd') -> 'bb'。

/**
 * @param {string} text
 * @returns {string}
 */
function longestPalindrome(text) {
    let bestStart = 0; // 最长回文子串从哪里开始
    let bestLength = 0; // 最长回文子串的长度

    function expanded(left, right) {
        while (left >= 0 && right < text.length && text[left] === text[right]) {
            left--;
            right++;
        }

        const start = left + 1;
        const length = right - left - 1;

        if (length > bestLength) {
            bestStart = start;
            bestLength = length;
        }
    }

    for (let i = 0; i < text.length; i++) {
        expanded(i, i); // 奇数
        expanded(i, i + 1); // 偶数
    }

    return text.slice(bestStart, bestStart + bestLength);
}

module.exports = { longestPalindrome };
