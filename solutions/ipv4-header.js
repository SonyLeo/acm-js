// IPv4 报文头解析。
// 输入固定为 20 个十六进制字节字符串，按网络字节序（大端）排列。
// 返回常用 IPv4 头字段的对象。
//
// 固定头字段布局（字节下标从 0 开始）：
// - byte 0：高 4 位为 version；低 4 位为首部长度，单位为 4 字节。
// - byte 1：tos（服务类型）。
// - byte 2-3：totalLength（总长度，16 位大端）。
// - byte 4-5：identification（标识，16 位大端）。
// - byte 6：高 3 位为 flags；低 5 位是 fragmentOffset 的高 5 位。
// - byte 7：fragmentOffset 的低 8 位；整个 fragmentOffset 是 13 位大端值。
// - byte 8：ttl。
// - byte 9：protocol。
// - byte 10-11：checksum（16 位大端）。
// - byte 12-15：sourceIP，每个字节转十进制并以 '.' 拼接。
// - byte 16-19：destinationIP，规则同 sourceIP。
//
// 位运算提示：取高 4 位用 x >> 4；取低 4 位用 x & 0x0F；
// 拼两个字节用 (high << 8) | low。

/**
 * @param {string[]} hexBytes 20 个两位十六进制字节字符串
 * @returns {{
 *   version: number,
 *   headerLength: number,
 *   tos: number,
 *   totalLength: number,
 *   identification: number,
 *   flags: number,
 *   fragmentOffset: number,
 *   ttl: number,
 *   protocol: number,
 *   checksum: number,
 *   sourceIP: string,
 *   destinationIP: string
 * }}
 */
function parseIPv4Header(hexBytes) {
    const bytes = hexBytes.map(item => parseInt(item, 16));
    const version = bytes[0] >> 4;
    const headerLength = (bytes[0] & 0x0f) * 4;
    const tos = bytes[1];
    const totalLength = (bytes[2] << 8) | bytes[3];
    const identification = (bytes[4] << 8) | bytes[5];
    const flags = bytes[6] >> 5;
    const fragmentOffset = ((bytes[6] & 0x1f) << 8) | bytes[7];
    const ttl = bytes[8];
    const protocol = bytes[9];
    const checksum = (bytes[10] << 8) | bytes[11];
    const sourceIP = `${bytes[12]}.${bytes[13]}.${bytes[14]}.${bytes[15]}`;
    const destinationIP = `${bytes[16]}.${bytes[17]}.${bytes[18]}.${bytes[19]}`;

    return {
        version,
        headerLength,
        tos,
        totalLength,
        identification,
        flags,
        fragmentOffset,
        ttl,
        protocol,
        checksum,
        sourceIP,
        destinationIP,
    };
}

module.exports = { parseIPv4Header };
