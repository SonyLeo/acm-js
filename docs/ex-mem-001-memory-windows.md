# 合法内存记录的受限总占用窗口

稳定编号：`EX-MEM-001`

## 题目

给定非负整数数组 `memory`、元素值允许范围 `valueRange = [minValue, maxValue]`，以及总内存阈值 `limit`。

统计满足以下两个条件的非空连续子数组数量：

1. 子数组中的每个元素都在闭区间 `[minValue, maxValue]` 内；
2. 子数组中所有元素的总和不超过 `limit`。

函数签名：

```js
countMemoryWindows(memory, valueRange, limit)
```

## 参数与返回值

- `memory`：非负整数数组，每项是一个时间点的内存占用记录。
- `valueRange`：`[minValue, maxValue]`，允许的元素值范围，包含边界。
- `limit`：非负整数，连续子数组允许的最大元素总和。
- 返回：满足条件的非空连续子数组数量。

## 示例

```js
countMemoryWindows([2, 0, 1, 0, 2], [0, 2], 2) // 10
```

所有元素都在值范围内。以每一个 `right` 为右端点时，合法子数组数量依次为：

```text
right = 0: 1 个 -> [2]
right = 1: 2 个 -> [2, 0]、[0]
right = 2: 2 个 -> [0, 1]、[1]
right = 3: 3 个 -> [0, 1, 0]、[1, 0]、[0]
right = 4: 2 个 -> [0, 2]、[2]
总计：1 + 2 + 2 + 3 + 2 = 10
```

```js
countMemoryWindows([2, 3, 1, 0, 2], [0, 2], 2) // 6
```

`3` 超出允许值范围。任何包含它的子数组都不合法，它会将数组切为 `[2]` 和 `[1, 0, 2]` 两段。

```js
countMemoryWindows([0, 1, 0], [0, 1], 0) // 2
```

只有两个单独的 `[0]` 总和不超过 `0`。

## 约束与关键观察

- `memory` 中所有数都非负，因此窗口总和在右边界扩张时不会减少。
- 值超出 `valueRange` 的元素不能出现在任何合法窗口中，遇到它必须重置当前窗口状态。
- 当当前合法窗口为 `[left, right]` 后，以 `right` 结尾的子数组共有 `right - left + 1` 个；它们都满足总和不超过 `limit`。
- 目标复杂度：时间 `O(n)`，额外空间 `O(1)`。

## 自测边界

```js
countMemoryWindows([2], [2, 2], 2) // 1，值和总和都刚好在边界
countMemoryWindows([3], [0, 2], 10) // 0，值越界
```

## 练习要求

1. 不使用双层循环枚举全部子数组。
2. 在开始编码前说明：`left`、`windowSum`、`result` 分别代表什么。
3. 当遇到越界元素时，说明为什么不能只缩小一次窗口，而要把窗口起点移到该元素之后。
4. 实现后运行：

```powershell
node --test .\tests\current-ex-mem-001-memory-windows.test.js
```
