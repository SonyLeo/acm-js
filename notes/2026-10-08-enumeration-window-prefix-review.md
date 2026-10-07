# 2026-10-08 枚举、窗口、双指针与前缀和复盘

## 本次范围与结论

本次完成的题目集中在四个可迁移的模块：链表双指针、枚举回溯、滑动窗口、双指针与前缀和。所有已归档题目的本地测试均通过；下一题从“子数组和等于目标值的数量（前缀和 + Map）”继续。

学习重点不是记住某个函数名，而是先判断题目是否存在下面的结构：

- 连续区间：优先考虑滑动窗口或前缀和。
- 从数组中选元素：区分“顺序是否重要”，决定用组合还是排列。
- 有序数组中从两端找关系：优先考虑对撞双指针。
- 单链表中寻找相对位置：优先考虑快慢双指针。
- 有多次区间求和：预处理一次前缀和，查询时相减。

## 1. 链表倒数第 k 个节点

文件：`solutions/kth-from-end.js`

### 模型

单链表不能按下标随机访问。若 `fast` 比 `slow` 先走 `k` 步，那么之后两者每次同步走一步；当 `fast` 到达 `null` 时，`slow` 正好在倒数第 `k` 个节点。

以 `1 -> 2 -> 3 -> 4 -> 5`、`k = 2` 为例：

| 阶段 | fast | slow |
| --- | --- | --- |
| 初始 | 1 | 1 |
| fast 先走 2 步 | 3 | 1 |
| 同走 1 次 | 4 | 2 |
| 同走 2 次 | 5 | 3 |
| 同走 3 次 | null | 4 |

### 模板与不变量

```js
let fast = head;
let slow = head;

for (let i = 0; i < k; i++) fast = fast.next;
while (fast !== null) {
  fast = fast.next;
  slow = slow.next;
}
return slow.value;
```

- 不变量：同步移动阶段中，`fast` 始终领先 `slow` 恰好 `k` 个节点。
- 复杂度：时间 `O(n)`，额外空间 `O(1)`。
- 易错点：节点的下一个节点是属性 `node.next`，不是函数 `node.next()`。

## 2. 两数之和的全部索引对

文件：`solutions/two-sum-pairs.js`

### 模型

本题要求返回全部满足条件的下标对，而不是只返回一组。因此使用双层枚举最直观：固定第一个下标 `i`，让第二个下标从 `i + 1` 开始。

```js
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) result.push([i, j]);
  }
}
```

- `j = i + 1` 保证 `i < j`，并避免 `[0, 1]` 与 `[1, 0]` 被重复计算。
- 复杂度：时间 `O(n^2)`，不计返回结果的额外空间 `O(1)`。
- 易错点：不要把“所有索引对”和“只找一组数”混为一题；后者可用 Map 优化，前者需要先确认是否要求完整列举。

## 3. 长度为 k 的组合枚举

文件：`solutions/combinations.js`

### 模型

组合只关心选了哪些数，不关心选取顺序。例如 `[1, 2]` 与 `[2, 1]` 是同一个组合，因此下一层只能从当前选择之后继续选。

```js
function backtrack(start) {
  if (path.length === k) {
    results.push([...path]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(i + 1);
    path.pop();
  }
}
```

### 必须记住的回溯三步

```text
选择：path.push(nums[i])
递归：backtrack(...)
撤销：path.pop()
```

`path` 是所有递归层共用的同一数组。保存答案时必须 `results.push([...path])` 创建副本；直接保存 `path` 会让所有答案最后都变成同一个数组内容。

- 关键状态：`path` 表示当前已选元素；`start` 表示下一次允许选择的起点。
- 复杂度：输出本身有 `C(n, k)` 个组合；总时间至少为 `O(C(n, k) * k)`。
- 易错点：递归传 `i + 1`，不是 `i`，否则会重复使用同一元素。

## 4. 全排列

文件：`solutions/permutations.js`

### 与组合的核心差异

排列关心顺序。`[1, 2, 3]`、`[1, 3, 2]` 都是不同答案，所以每一层都要重新从所有下标中尝试选择；但当前路径已经用过的元素不能再用，需要 `used` 记录。

| 问题 | 组合 | 全排列 |
| --- | --- | --- |
| 顺序是否重要 | 否 | 是 |
| 下一层循环起点 | `start` | 每层从 `0` 开始 |
| 如何避免重复选择同一下标 | 靠 `i + 1` | 靠 `used[i]` |
| 递归参数 | `backtrack(i + 1)` | 通常无需 `start` |

### 模板

```js
function backtrack() {
  if (path.length === nums.length) {
    results.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;

    path.push(nums[i]);
    used[i] = true;
    backtrack();
    path.pop();
    used[i] = false;
  }
}
```

- 关键状态：`path` 是当前排列；`used[i]` 表示 `nums[i]` 是否已经在当前路径中。
- 复杂度：共有 `n!` 种结果，每份答案长度为 `n`，总时间约为 `O(n * n!)`，空间 `O(n)`（不计结果）。
- 本次真实错误：将组合里的 `start / i + 1` 直接搬到排列，会只得到升序的一条路径。原因是后续层被限制为只能挑更靠右的元素，无法产生交换顺序。

## 5. 最多翻转一位的最长连续目标值

文件：`solutions/max-consecutive-target.js`

### 模型：可变长度滑动窗口

题目求的是连续子数组，且窗口中最多允许一个“不等于 `target`”的值。维护窗口 `[left, right]` 和 `nonTargetCount`：右边扩张后如果不合法，就从左侧不断缩小，直到恢复合法。

```js
let left = 0;
let nonTargetCount = 0;
let maxLength = 0;

for (let right = 0; right < bits.length; right++) {
  if (bits[right] !== target) nonTargetCount++;

  while (nonTargetCount > 1) {
    if (bits[left] !== target) nonTargetCount--;
    left++;
  }

  maxLength = Math.max(maxLength, right - left + 1);
}
```

### 不变量与复杂度

- 不变量：更新 `maxLength` 时，窗口内始终满足 `nonTargetCount <= 1`。
- 每个元素最多被右指针加入一次、被左指针移出一次，因此时间 `O(n)`，空间 `O(1)`。
- 本次真实错误：缩窗时只在左端是非目标值时才移动 `left`。若左端是目标值而窗口仍违规，循环状态不会变化，造成死循环。正确顺序是：先按需减少计数，然后无条件 `left++`。

### 可变窗口口诀

```text
右边加入状态；违规就 while 缩左；合法后更新答案。
```

## 6. 固定长度子数组最大和

文件：`solutions/max-fixed-window-sum.js`

### 模型：固定长度滑动窗口

维护当前窗口元素和。每次右端加入新值；窗口超过 `k` 时只会多一个元素，所以移除一次左端即可；长度恰好为 `k` 时更新答案。

```js
let left = 0;
let windowSum = 0;
let maxSum = -Infinity;

for (let right = 0; right < nums.length; right++) {
  windowSum += nums[right];

  if (right - left + 1 > k) {
    windowSum -= nums[left];
    left++;
  }

  if (right - left + 1 === k) {
    maxSum = Math.max(maxSum, windowSum);
  }
}
```

### 与可变窗口对比

| 对比项 | 固定长度窗口 | 可变长度窗口 |
| --- | --- | --- |
| 目标 | 窗口长度必须等于 `k` | 维持某个合法条件 |
| 左侧收缩 | `if (长度 > k)`，通常一次 | `while (不合法)`，可能多次 |
| 更新答案 | 长度等于 `k` | 恢复合法后 |

- 复杂度：时间 `O(n)`，空间 `O(1)`。
- 易错点：`maxSum` 应初始化为 `-Infinity`。若初始化为 `0`，当所有长度为 `k` 的子数组和均为负数时，返回值会错误地停留在 `0`。

## 7. 已排序数组两数之和

文件：`solutions/two-sum-sorted.js`

### 模型：对撞双指针

数组已经非递减排序。令 `left` 在最左、`right` 在最右：

- 和太小：必须增大左侧值，所以 `left++`。
- 和太大：必须减小右侧值，所以 `right--`。
- 相等：找到答案。

```js
let left = 0;
let right = nums.length - 1;

while (left < right) {
  const sum = nums[left] + nums[right];
  if (sum === target) return [left, right];
  if (sum < target) left++;
  else right--;
}
return [];
```

每次指针移动都排除了不可能的范围，利用排序性质将暴力 `O(n^2)` 降到 `O(n)`，额外空间 `O(1)`。

### 与无序数组两数之和（Map）的选择

| 输入特点 | 推荐方案 | 原因 |
| --- | --- | --- |
| 已排序、只需要一组 | 对撞双指针 | 可用单调性，`O(n)` 且 `O(1)` 空间 |
| 无序、只需要一组 | Map | 查找补数，平均 `O(n)` |
| 要返回全部下标对 | 双层枚举或按题意设计 Map | 需确保不会漏对或重复 |

无序 Map 版本最重要的顺序是“先查补数，再记录当前数”：

```js
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (indexMap.has(complement)) return [indexMap.get(complement), i];
  indexMap.set(nums[i], i);
}
```

这样不会在同一轮中把一个元素与自己配对。

## 8. 区间和查询

文件：`solutions/range-sum.js`

### 模型：前缀和

当同一个数组要进行多次区间和查询时，先构建：

```text
prefixSums[0] = 0
prefixSums[i + 1] = nums[0] + ... + nums[i]
```

闭区间 `[left, right]` 的和为：

```text
prefixSums[right + 1] - prefixSums[left]
```

例如 `nums = [2, -1, 3, 4]`：

| 下标 / 含义 | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| prefixSums | 0 | 2 | 1 | 4 | 8 |

查询 `[1, 3]`：`prefixSums[4] - prefixSums[1] = 8 - 2 = 6`，即 `-1 + 3 + 4`。

```js
const prefixSums = [0];
for (const num of nums) {
  prefixSums.push(prefixSums[prefixSums.length - 1] + num);
}

for (const [left, right] of queries) {
  results.push(prefixSums[right + 1] - prefixSums[left]);
}
```

- 预处理时间 `O(n)`、空间 `O(n)`；每次查询 `O(1)`，总查询时间 `O(q)`。
- 本次真实错误：向结果数组分别 `push` 两个前缀值。每个查询只应产生一个答案，因此应把两者相减后再 `push`。
- 易错点：输入是闭区间时右端下标必须是 `right + 1`；`prefixSums[0] = 0` 正是为了让从下标 `0` 开始的区间也能统一套公式。

## 下一题预告：前缀和 + Map

当前文件：`solutions/current-subarray-sum-count.js`

题目是统计“和等于 `target` 的连续子数组数量”。单独的前缀和只能快速求某一段的和；加入 Map 后可以在遍历到当前前缀和 `prefixSum` 时，统计此前有多少次前缀和等于 `prefixSum - target`。

核心关系：

```text
prefixSum - oldPrefixSum = target
oldPrefixSum = prefixSum - target
```

模板顺序不能颠倒：

```js
let prefixSum = 0;
let result = 0;
const countMap = new Map([[0, 1]]);

for (const num of nums) {
  prefixSum += num;
  result += countMap.get(prefixSum - target) || 0;
  countMap.set(prefixSum, (countMap.get(prefixSum) || 0) + 1);
}
```

先查、后记录，避免将当前前缀和错误地用于当前元素之前的区间。`new Map([[0, 1]])` 表示“空前缀和出现过一次”，从而正确统计从下标 `0` 开始的子数组。

## 复写计划与调试练习

### 复写顺序

1. +1 天：全排列、最多翻转一位的最长连续目标值。
2. +3 天：固定长度子数组最大和、区间和查询。
3. +7 天：不看答案写出组合与排列的差异、两种滑动窗口模板、两数之和方案选择。

### 可选 VS Code 调试练习

使用 `node --test` 对应测试文件时，可在核心函数内部设断点并按 F5：

- 全排列：观察 `path` 与 `used` 在 `push/true` 后、`pop/false` 后是否完全恢复。
- 可变窗口：观察 `left`、`right`、`nonTargetCount`，确认每次 `while` 循环都让 `left` 前进。
- 固定窗口：观察 `windowSum` 与 `right - left + 1`，确认答案仅在长度等于 `k` 时更新。
- 前缀和：观察 `prefixSums` 和每次查询的 `prefixSums[right + 1] - prefixSums[left]`。

## 跨机器继续

在另一台机器拉取 `main` 后，从以下两个文件继续：

- 解答：`solutions/current-subarray-sum-count.js`
- 测试：`tests/current-subarray-sum-count.test.js`

实现后运行：

```powershell
node --test .\tests\current-subarray-sum-count.test.js
```

三组测试通过后，再把文件名中的 `current-` 去掉归档，并在 `notes/progress.md` 更新状态。
