// 魔法校验和。
// 输入为十六进制字节字符串数组，每个元素代表一个字节，例如 '61'。
// 字节数不足 4 的倍数时，在末尾补 'FF'；每 4 字节按大端拼成 32 位整数后依次异或。
// 返回固定 8 位的大写十六进制校验和。
// 示例：magicChecksum(['61', '62', '63', '64', '32', '30', '31', '32', '4C', '61', '62']) -> '1F3330A9'。

/**
 * @param {string[]} hexBytes 每项为两位十六进制字节
 * @returns {string}
 */
function magicChecksum(hexBytes) {
    const digitsArr = hexBytes.map(byteStr => parseInt(byteStr, 16));

    while (digitsArr.length % 4 !== 0) {
        digitsArr.push(0xff);
    }

    let checksum = 0;
    for (let i = 0; i < digitsArr.length; i += 4) {
        const word =
            (digitsArr[i] << 24) |
            (digitsArr[i + 1] << 16) |
            (digitsArr[i + 2] << 8) |
            digitsArr[i + 3];
        checksum ^= word;
    }

    return (checksum >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

module.exports = { magicChecksum };
