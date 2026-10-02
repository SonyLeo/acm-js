// 二分搜索：在升序且无重复的数组中查找目标值。
// 找到则返回目标元素的下标；找不到则返回 -1。
// 示例：binarySearch([-1, 0, 3, 5, 9, 12], 9) -> 4。

/**
 * @param {number[]} nums 升序且无重复的整数数组
 * @param {number} target
 * @returns {number}
 */
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

module.exports = { binarySearch };
