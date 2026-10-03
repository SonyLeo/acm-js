// 报文重排序。
// 每段格式为“英文字母内容 + 正整数索引”，索引在末尾且不重复。
// 按索引升序重排内容，并以一个空格拼接返回。
// 示例：restoreMessage(['rolling3', 'stone4', 'like1', 'a2']) -> 'like a rolling stone'。

/**
 * @param {string[]} segments
 * @returns {string}
 */
function restoreMessage(segments) {
    const msgMap = new Map();

    for (const segment of segments) {
        const match = segment.match(/(\d+)$/);
        const index = Number(match[1]);
        const word = segment.slice(0, match.index)
        msgMap.set(index, word);
    }

    return [...msgMap]
        .sort(([aIndex], [bIndex]) => aIndex - bIndex)
        .map(([, word]) => word)
        .join(' ');
}

module.exports = { restoreMessage };
