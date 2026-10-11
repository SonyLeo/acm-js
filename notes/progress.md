# 练习看板

完整题目、文件、考点与状态请查 [习题目录](../docs/problem-catalog.md)；按模板复习请查 [算法模板索引](../docs/algorithm-templates.md)。本页只记录当前行动，避免与目录重复维护。

## 当前题目

- **EX-MEM-001：合法内存记录的受限总占用窗口**
  - 题面：[ex-mem-001-memory-windows.md](../docs/ex-mem-001-memory-windows.md)
  - 解答：[current-ex-mem-001-memory-windows.js](../solutions/current-ex-mem-001-memory-windows.js)
  - 测试：[current-ex-mem-001-memory-windows.test.js](../tests/current-ex-mem-001-memory-windows.test.js)
  - 状态：进行中；先完成函数，再取消三组测试的 `.skip` 并运行。
  - 模板：值范围检测 + 非负数组的可变滑动窗口。

## 下一步

1. **EX-MEM-002：合法内存记录的平均占用阈值**：前缀和进阶；理解平均值条件不能直接套标准滑动窗口。

三个题的题面统一见 [前缀和与内存窗口练习题](../docs/prefix-sum-and-memory-window-practice.md)。

## 待复写与排队

- HJ6：质因数分解（试除与平方根上界）。
- RW-HJ26：字符串稳定排序与位置回填，[骨架](../solutions/queued-HJ26-rewrite.js)。
- HJ48：链表插入/删除模拟。

## 最近复盘

- [2026-10-04：位运算、字符串、矩阵与回文](./2026-10-04-practice-review.md)
- [2026-10-08：枚举、窗口、双指针与前缀和](./2026-10-08-enumeration-window-prefix-review.md)
- [2026-10-11：前缀和与内存窗口](./2026-10-11-prefix-sum-memory-window-review.md)

## 更新规则

每次开始、完成、归档或安排复写时：

1. 先更新 [习题目录](../docs/problem-catalog.md) 中该题的状态与资料链接。
2. 再更新本页的“当前题目 / 下一步 / 待复写”。
3. 完成复杂题或一个练习日后，在 `notes/YYYY-MM-DD-*.md` 新建复盘，并从目录链接过去。
