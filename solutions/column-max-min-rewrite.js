// 二维数组列最大值的最小值：闭卷复写
// 参数：matrix，一个非空的矩形数字二维数组。
// 返回：每一列最大值中的最小值。
// 示例：minOfColumnMaxes([[3, 1, 7], [2, 8, 4], [5, 6, 9]]) -> 5。

/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function minOfColumnMaxes(matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  const maxNumArr = new Array(colLength).fill(-Infinity)

  for (let j = 0; j < colLength; j++) {
    for (let i = 0; i < rowLength; i++) {
      if(matrix[i][j] > maxNumArr[j]) {
        maxNumArr[j] = matrix[i][j]
      }
    }
  }

  return Math.min(...maxNumArr)
}

module.exports = { minOfColumnMaxes };
