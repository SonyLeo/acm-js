// 二分搜索边界：在升序数组中查找 target 第一次和最后一次出现的下标。
// 返回 [左边界, 右边界]；若 target 不存在，返回 [-1, -1]。
// 示例：searchRange([1, 2, 2, 2, 3], 2) -> [1, 3]。

/**
 * @param {number[]} nums 升序整数数组，允许重复
 * @param {number} target
 * @returns {[number, number]}
 */
function searchRange(nums, target) {
  const left = leftBound(nums, target)
  const right = rightBound(nums, target)
  return [left, right]
}

function leftBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            right = mid - 1;
        }
    }

    return left < nums.length && nums[left] === target ? left : -1;
}

function rightBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right >= 0 && nums[right] === target ? right : -1;
}

module.exports = { searchRange };
