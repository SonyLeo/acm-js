// HJ102 字符统计：按出现次数降序输出所有不同字符；
// 出现次数相同则按字符 ASCII 升序输出。
// 示例：sortCharsByFrequency('aaddccdc') -> 'cda'。

/**
 * @param {string} text
 * @returns {string}
 */
function sortCharsByFrequency(text) {
    const countMap = new Map();

    for (const char of text) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    return [...countMap]
        .sort(([charA, countA], [charB, countB]) => {
            if (countA !== countB) {
                return countB - countA;
            }
            return charA.charCodeAt(0) - charB.charCodeAt(0);
        })
        .map(([char]) => char)
        .join('');
}

module.exports = { sortCharsByFrequency };
