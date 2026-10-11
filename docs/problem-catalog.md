# 习题目录

这是仓库中题目、考点、模板、代码、测试与复盘之间的**唯一索引入口**。想按题号找题、按考点复习或定位当前练习时，先查本文件。

## 使用方式

1. **按题目找资料**：在本页搜索 `HJ5`、`LC-190`、`EX-PS-001` 等稳定编号。
2. **按考点找题**：跳到对应模块；每题都标出了可迁移模板。
3. **按模板复习**：打开 [算法模板索引](./algorithm-templates.md)，其中反向链接了本页的关联题。
4. **查看当前进度**：打开 [练习看板](../notes/progress.md)，不要再从本页猜测当前题。

### 状态说明

| 状态 | 含义 |
| --- | --- |
| 本地完成 | 已通过仓库中的本地样例或自动测试，尚未记录平台 AC。 |
| 已 AC | 用户已确认练习平台通过。 |
| 进行中 | 已生成题面、骨架和测试，正在实现。 |
| 待练习 | 已编入计划，尚未生成或开始实现。 |
| 待复写 | 已做过，计划闭卷重写。 |
| 历史 ACM | 旧版标准输入输出实现；保留作为历史材料，不强制迁移。 |

> 代码、测试或题面缺失时用“—”标记，不虚构链接。旧题的题面以原练习平台为准；自定义题面存放在 `docs/`。

## 字符串、分类与排序

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| HJ1 | 字符串最后一个单词长度 | 字符串扫描、分词 | 本地完成（历史 ACM） | [解答](../solutions/HJ1.js) |
| HJ2 | 计算字符个数 | 忽略大小写、遍历计数 | 本地完成（历史 ACM） | [解答](../solutions/HJ2.js) |
| HJ4 | 字符串分隔 | 定长分组、末尾补齐 | 本地完成（历史 ACM） | [解答](../solutions/HJ4.js) |
| HJ11 | 数字颠倒 | 字符串/逐位反转 | 本地完成 | [解答](../solutions/HJ11.js) · [测试](../tests/HJ11.test.js) · [复盘](../notes/2026-10-04-practice-review.md#3-hj11-数字颠倒) |
| HJ12 | 字符串反转 | 相向双指针 | 本地完成 | [解答](../solutions/HJ12.js) · [测试](../tests/HJ12.test.js) · [复盘](../notes/2026-10-04-practice-review.md#4-hj12-字符串反转) |
| HJ13 | 句子逆序 | 分词、数组反转、拼接 | 本地完成 | [解答](../solutions/HJ13.js) · [测试](../tests/HJ13.test.js) · [复盘](../notes/2026-10-04-practice-review.md#5-hj13-句子逆序) |
| HJ23 | 删除最少频次字符 | Map 统计、二次扫描 | 本地完成（历史 ACM） | [解答](../solutions/HJ23.js) |
| HJ26 | 字符串排序 | 稳定排序、分类提取、位置回填 | 本地完成 | [解答](../solutions/HJ26.js) · [测试](../tests/HJ26.test.js) |
| RW-HJ26 | HJ26 闭卷复写 | 稳定排序、位置回填 | 待复写 | [骨架](../solutions/queued-HJ26-rewrite.js) |
| EX-SORT-001 | 数字字母混合排序 | 分类提取、分别排序、按位回填 | 本地完成 | [解答](../solutions/mixed-sort.js) · [测试](../tests/mixed-sort.test.js) |
| RW-SORT-001 | 数字字母混合排序闭卷复写 | 分类、排序、位置回填 | 本地完成 | [解答](../solutions/mixed-sort-review.js) |
| LC-922 | 按奇偶排序数组 II | 分类 + 位置回填 / 双指针 | 本地完成 | [解答](../solutions/sort-array-by-parity-ii.js) · [测试](../tests/sort-array-by-parity-ii.test.js) |
| HJ102 | 字符统计 | Map 频次、双关键字排序 | 本地完成 | [核心解答](../solutions/HJ102-character-sort.js) · [测试](../tests/HJ102-character-sort.test.js) · [历史 ACM](../solutions/HJ102.js) |

## Map、Set 与规则模拟

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| HJ8 | 合并表记录 | Map 按 key 累加、数字排序 | 本地完成（历史 ACM） | [解答](../solutions/HJ8.js) |
| HJ9 | 提取不重复整数 | Set 去重、逆向遍历 | 本地完成（历史 ACM） | [解答](../solutions/HJ9.js) |
| HJ10 | 字符个数统计 | Set 去重 | 本地完成（历史 ACM） | [解答](../solutions/HJ10.js) |
| HJ80 | 整型数组合并 | Set 去重、数值排序 | 本地完成（历史 ACM） | [解答](../solutions/HJ80.js) |
| EX-MAP-001 | 阈值字符统计 | Map 频次、筛选、字典序 | 本地完成 | [解答](../solutions/frequent-chars.js) · [测试](../tests/frequent-chars.test.js) |
| EX-MAP-002 | 报文重排序 | 正则解析、Map、按序拼接 | 本地完成 | [解答](../solutions/packet-reassembly.js) · [测试](../tests/packet-reassembly.test.js) |
| EX-SIM-001 | 呼叫转移规则模拟 | Map 覆盖、优先级判断链 | 本地完成 | [解答](../solutions/call-forwarding.js) · [测试](../tests/call-forwarding.test.js) |

## 位运算与进制转换

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| HJ5 | 十六进制转十进制 | 显式 radix、逐位累积 | 本地完成 | [核心解答](../solutions/HJ5-hex-to-decimal.js) · [测试](../tests/HJ5-hex-to-decimal.test.js) · [历史 ACM](../solutions/HJ5.js) |
| HJ6 | 质数因子 | 试除、平方根上界 | 本地完成（历史 ACM）；待复写 | [解答](../solutions/HJ6.js) |
| LC-2220 | 最少位翻转 | 异或、统计二进制 1 | 本地完成 | [解答](../solutions/min-bit-flips.js) · [测试](../tests/min-bit-flips.test.js) |
| LC-190 | 颠倒二进制位 | 固定 32 次、无符号右移 | 本地完成 | [解答](../solutions/reverse-bits.js) · [测试](../tests/reverse-bits.test.js) |
| EX-BIT-001 | 魔法校验和 | 补齐、大端拼接、异或、无符号输出 | 本地完成 | [解答](../solutions/magic-checksum.js) · [测试](../tests/magic-checksum.test.js) · [复盘](../notes/2026-10-04-practice-review.md#1-魔法校验和) |
| EX-BIT-002 | IPv4 报文头解析 | 十六进制字节、位字段、大端序 | 本地完成 | [解答](../solutions/ipv4-header.js) · [测试](../tests/ipv4-header.test.js) · [复盘](../notes/2026-10-04-practice-review.md#2-ipv4-报文头解析) |

## 数组、矩阵、排序与查找

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| EX-MATRIX-001 | 每列最大值的最小值 | 二维遍历、列状态维护 | 本地完成 | [解答](../solutions/exercise-column-max-min.js) · [测试](../tests/exercise-column-max-min.test.js) · [复盘](../notes/2026-10-04-practice-review.md#6-二维数组每列最大值的最小值) |
| RW-MATRIX-001 | 矩阵题闭卷复写 | 二维遍历、列状态维护 | 本地完成 | [解答](../solutions/column-max-min-rewrite.js) · [测试](../tests/column-max-min-rewrite.test.js) |
| EX-INTERVAL-001 | 区间合并（左闭右开） | 排序 + 线性扫描 | 本地完成 | [解答](../solutions/interval-merge.js) · [测试](../tests/interval-merge.test.js) |
| EX-BS-001 | 二分搜索基础 | 左闭右闭二分 | 本地完成 | [解答](../solutions/binary-search.js) · [测试](../tests/binary-search.test.js) |
| EX-BS-002 | 二分搜索左右边界 | 左/右边界二分 | 本地完成 | [解答](../solutions/binary-search-range.js) · [测试](../tests/binary-search-range.test.js) |
| EX-SET-001 | 给定差值的不重复数对 | Set 查找、去重 | 本地完成 | [解答](../solutions/k-diff-pairs.js) · [测试](../tests/k-diff-pairs.test.js) |

## 栈、队列、链表与回文

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| EX-PAL-001 | 最长回文子串 | 中心扩展、奇偶中心 | 本地完成 | [解答](../solutions/longest-palindrome.js) · [测试](../tests/longest-palindrome.test.js) · [复盘](../notes/2026-10-04-practice-review.md#7-最长回文子串) |
| EX-QUEUE-001 | 基础队列模拟 | 数组 + `head` 指针 | 本地完成 | [解答](../solutions/queue-simulation.js) · [测试](../tests/queue-simulation.test.js) |
| EX-STACK-001 | 有效括号匹配 | 栈、匹配表 | 本地完成 | [解答](../solutions/valid-brackets.js) · [测试](../tests/valid-brackets.test.js) |
| HJ51 | 链表倒数第 k 个节点 | 快慢双指针、固定间距 | 本地完成 | [解答](../solutions/kth-from-end.js) · [测试](../tests/kth-from-end.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#1-链表倒数第-k-个节点) |
| HJ48 | 链表插入/删除模拟 | 前驱节点、头节点边界 | 待练习 | — |

## 枚举、滑动窗口、双指针与前缀和

| 编号 | 题目 | 考点 / 模板 | 状态 | 资料 |
| --- | --- | --- | --- | --- |
| EX-ENUM-001 | 两数之和全部索引对 | 双层遍历枚举、`j = i + 1` | 本地完成 | [解答](../solutions/two-sum-pairs.js) · [测试](../tests/two-sum-pairs.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#2-两数之和的全部索引对) |
| EX-ENUM-002 | 长度为 k 的组合 | 回溯、`start`、选择与撤销 | 本地完成 | [解答](../solutions/combinations.js) · [测试](../tests/combinations.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#3-长度为-k-的组合枚举) |
| EX-ENUM-003 | 全排列 | 回溯、`used`、选择与撤销 | 本地完成 | [解答](../solutions/permutations.js) · [测试](../tests/permutations.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#4-全排列) |
| EX-SW-001 | 最多翻转一位的最长连续目标值 | 可变滑动窗口、窗口内至多 1 个非目标值 | 本地完成 | [解答](../solutions/max-consecutive-target.js) · [测试](../tests/max-consecutive-target.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#5-最多翻转一位的最长连续目标值) |
| RW-SW-001 | 最大连续目标值闭卷复写 | 可变滑动窗口、状态撤销 | 本地完成 | [题面](./max-consecutive-target-rewrite.md) · [解答](../solutions/rw-sw-001-max-consecutive-target.js) · [测试](../tests/rw-sw-001-max-consecutive-target.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#5-最多翻转一位的最长连续目标值) |
| EX-SW-002 | 固定长度子数组最大和 | 固定窗口、窗口和 | 本地完成 | [解答](../solutions/max-fixed-window-sum.js) · [测试](../tests/max-fixed-window-sum.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#6-固定长度子数组最大和) |
| EX-TP-001 | 已排序数组两数之和 | 对撞双指针、单调性 | 本地完成 | [解答](../solutions/two-sum-sorted.js) · [测试](../tests/two-sum-sorted.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#7-已排序数组两数之和) |
| EX-PS-001 | 区间和查询 | 前缀和、区间相减 | 本地完成 | [解答](../solutions/range-sum.js) · [测试](../tests/range-sum.test.js) · [复盘](../notes/2026-10-08-enumeration-window-prefix-review.md#8-区间和查询) |
| EX-PS-002 | 子数组和等于目标值的数量 | 前缀和 + Map 频次 | 本地完成 | [题面](./prefix-sum-and-memory-window-practice.md#题目-1子数组和等于目标值的数量) · [解答](../solutions/ex-ps-002-subarray-sum-count.js) · [测试](../tests/ex-ps-002-subarray-sum-count.test.js) · [复盘](../notes/2026-10-11-prefix-sum-memory-window-review.md#1-子数组和等于目标值的数量) |
| EX-MEM-001 | 合法内存记录的受限总占用窗口 | 值范围检测、非负数组滑动窗口 | 进行中 | [题面](./ex-mem-001-memory-windows.md) · [骨架](../solutions/current-ex-mem-001-memory-windows.js) · [测试](../tests/current-ex-mem-001-memory-windows.test.js) · [复盘](../notes/2026-10-11-prefix-sum-memory-window-review.md#2-合法内存记录的受限总占用窗口) |
| EX-MEM-002 | 合法内存记录的平均占用阈值 | 前缀和、平均值转化 | 待练习 | [题面](./prefix-sum-and-memory-window-practice.md#题目-3合法内存记录的平均占用阈值) |

## 新题登记规格

后续新增题目必须先在本页登记，再创建代码文件。每个条目至少包含：

```text
稳定编号：官方题用 HJ/LC 编号；自定义题用 EX-模块-序号；闭卷复写用 RW-原编号。
题目名称：一句话可搜索的名称。
来源：官方题 / 自定义练习 / 闭卷复写。
考点：不超过三个考试范围内的标签。
模板：一个主要可迁移模板。
状态：待练习 / 进行中 / 本地完成 / 已 AC / 待复写。
资料链接：题面、解答、测试；完成后补复盘链接。
```

新题文件遵循下列命名：

```text
docs/<稳定编号小写>-<slug>.md                 # 题面；官方旧题可只链接平台题面
solutions/current-<稳定编号小写>-<slug>.js     # 进行中核心函数
tests/current-<稳定编号小写>-<slug>.test.js    # 对应 Node 原生测试
```

完成归档时，移除解答与测试文件名的 `current-` 前缀，并把本页状态更新为“本地完成”或“已 AC”。
