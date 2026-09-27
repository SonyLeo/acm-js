// 补充练习：逐列最大值的最小值
// 参数：matrix，一个非空的矩形数字二维数组；每个内部数组是一行。
// 返回：每一列最大值中的最小值。
// 示例：
// minOfColumnMaxes([[3, 1, 7], [2, 8, 4], [5, 6, 9]]) -> 5
// minOfColumnMaxes([[4, 2, 6]]) -> 2
// minOfColumnMaxes([[-5, -2], [-3, -4], [-6, -1]]) -> -3

/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function minOfColumnMaxes(matrix) {
  // TODO: 对每一列求最大值，再返回这些最大值中的最小值。
  const rowLens = matrix.length;
  const colLens = matrix[0].length;
  const maxNumArr = new Array(colLens).fill(-Infinity);

  for(let j = 0; j < colLens; j++) {
    for(let i = 0; i < rowLens; i++) {
      if(matrix[i][j] > maxNumArr[j]) {
        maxNumArr[j] = matrix[i][j]
      }
    }
  }

  return Math.min(...maxNumArr)
}

module.exports = { minOfColumnMaxes };
