// 全排列
// 参数：nums，元素互不重复的数字数组。
// 返回：nums 的所有全排列；每一种排列都包含 nums 的全部元素，元素顺序不同即视为不同结果。
// 示例：permutations([1, 2, 3]) ->
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]。

/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permutations(nums) {
  // TODO:
  // 1. 准备 results（全部排列）、path（当前排列）和 used（每个下标是否已被当前 path 使用）。
  // 2. 编写 backtrack()：path 长度等于 nums.length 时，保存 path 的副本。
  // 3. 每层都遍历 nums 的所有下标；已使用的下标跳过。
  // 4. 选择 nums[i]：path.push、used[i] = true、递归、再 path.pop 与 used[i] = false 撤销。
  const results = [];
  const path = [];
  const used = [];

  function backtrack() {
    if(path.length === nums.length) {
      results.push([...path])
      return;
    }

    for (let i = 0; i < nums.length; i++) {

      if(used[i]) {
        continue;
      }

      path.push(nums[i])
      used[i] = true;

      backtrack()

      path.pop()
      used[i] = false;
    }
  }

  backtrack()
  return results;
}

module.exports = { permutations };
