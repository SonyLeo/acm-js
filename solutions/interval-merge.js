// 区间合并：求合并后的总长度
// 每个区间为 { start, end }，表示左闭右开区间 [start, end)。
// 返回所有重叠区间合并后的总长度。
// 示例：calculateMergedLength([{ start: 1, end: 5 }, { start: 2, end: 6 }]) -> 5。
// 示例：calculateMergedLength([{ start: 1, end: 3 }, { start: 5, end: 8 }]) -> 5。
// 示例：calculateMergedLength([{ start: 2, end: 7 }]) -> 5。

/**
 * @param {{ start: number, end: number }[]} intervals
 * @returns {number}
 */
function calculateMergedLength(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let totalLength = 0;
    let curStart = intervals[0].start;
    let curEnd = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
        const { start, end } = intervals[i];
        if (start >= curEnd) {
            // 没有重叠
            totalLength += curEnd - curStart;
            curStart = start;
            curEnd = end;
        } else {
            // 有重叠
            curEnd = Math.max(curEnd, end);
        }
    }

    totalLength += curEnd - curStart;

    return totalLength;
}

module.exports = { calculateMergedLength };
