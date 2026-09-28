// HJ26 字符串排序
// 参数：s，一行字符串。
// 返回：只排序英文字母；字母按不区分大小写的字典序排列，同字母保持输入顺序；非字母保持原位置。
// 示例：sortLettersInPlace('Type A1') -> 'AeT 1yp'。

/**
 * @param {string} s
 * @returns {string}
 */
function sortLettersInPlace(s) {
    // TODO: 提取字母、稳定排序，再按原位置回填。
    const regExp = /[a-zA-Z]/g;
    const letters = (s.match(regExp) || []).sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        if (aLower < bLower) {
            return -1;
        } else if (aLower > bLower) {
            return 1;
        } else {
            return 0;
        }
    });

    let i = 0;
    return s.replace(regExp, () => letters[i++]);
}

module.exports = { sortLettersInPlace };
