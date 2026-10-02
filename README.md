# 某学校算法考试 JavaScript 练习

这是一个面向 JavaScript ACM 模式算法考试的本地练习目录。每道题都以独立的 `.js` 文件实现，使用 Node.js 从标准输入读取数据，并向标准输出打印结果。

## 环境要求

- Node.js 20 或更高版本，当前推荐使用 LTS 版本。
- PowerShell、Windows Terminal 或其他可以运行 Node.js 的终端。
- 练习平台账号，用于提交代码并验证隐藏测试。

检查 Node.js 是否可用：

```powershell
node -v
```

本目录不依赖 Vue、Vite 或第三方 npm 包。算法题优先使用 Node.js 内置能力，确保本地环境与考试环境接近。

## 目录结构

```text
school-algorithm-practice/
├─ README.md
├─ .gitignore
├─ solutions/
├─ tests/
├─ cases/
├─ docs/
└─ notes/
```

### `solutions/`

保存每道题的 JavaScript 解答。后续新题使用核心代码模式：文件只导出一个函数，不负责标准输入输出。当前正在练习的题使用 `current-` 前缀；完成本地验证后移除该前缀，例如：

```text
solutions/current-HJ23.js
solutions/HJ1.js
solutions/HJ5.js
```

新题的函数只完成算法计算，测试文件负责调用与结果校验。不要在核心函数中保留调试用的 `console.log`、截图或临时数据。

### `tests/`

保存核心代码模式的 Node 原生测试。每题包含公开样例和两个边界用例；测试负责传入参数并核对返回值：

```powershell
node --test .\tests\current-HJ<编号>.test.js
```

### `cases/`

保存既有 ACM 模式题目的本地测试输入文件。新题默认使用 `tests/` 自动测试，不再创建 `.in` 文件。文件内容应与提交平台的标准输入格式一致，例如：

```text
cases/current-HJ23.in
cases/HJ1.in
cases/HJ5.in
cases/HJ5-multi.in
```

建议每道题至少准备一个官方样例和两个自己构造的边界样例。边界样例可以覆盖空行、长度为 1、重复值、刚好整除、最大或最小输入等情况。

### `docs/`

保存长期参考资料：

- `algorithm-review-plan.md`：当前考试范围内的复习路线和题目编排。
- `algorithm-agent-coaching-guide.md`：交给算法辅导 Agent 使用的总提示词、分层提示策略、代码审查标准和交接格式。

### `notes/`

保存个人学习过程，不保存复制来的完整题解。推荐记录：首次耗时、思路、错误类型、复杂度、边界条件和重写结果。

- `progress.md`：当前完成进度和每题复盘模板。

## 单题练习流程

每道题按以下顺序执行：

1. 阅读题面，写出输入、输出、约束和至少两个边界情况。
2. 创建 `solutions/current-HJ<编号>.js` 和 `tests/current-HJ<编号>.test.js`。
3. 只实现核心函数，不写输入输出代码。
4. 在测试文件准备公开样例和两个边界用例。
5. 用 `node --test` 运行自动测试。
6. 对照预期输出检查格式，删除所有调试输出。
7. 将代码提交到练习平台，确认公开和隐藏测试。
8. 在 `notes/progress.md` 或单独笔记中记录复盘结果。
9. 间隔 1 天、3 天和 7 天重新实现，确认不是只看懂了题解。

## ACM 输入输出模板

单行或整段文本输入：

```js
const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trimEnd();

// 解析 input，计算 result
console.log(result);
```

按行读取：

```js
const lines = input ? input.split(/\r?\n/) : [];
```

按空白读取数字或 token：

```js
const tokens = input.trim() ? input.trim().split(/\s+/) : [];
```

注意事项：

- `trimEnd()` 适合去掉末尾换行，同时尽量保留输入正文中的空格。
- `split(/\r?\n/)` 用于保留行结构。
- `split(/\s+/)` 会合并空格、制表符和换行，不能用于依赖原始空格的题目。
- 数字排序必须写 `arr.sort((a, b) => a - b)`。
- 超过 `Number.MAX_SAFE_INTEGER` 的整数应评估是否需要 `BigInt`。
- 最终输出必须严格匹配题目要求。

## 本地运行

在本目录根路径执行：

```powershell
Get-Content -Raw .\cases\HJ1.in | node .\solutions\HJ1.js
```

使用另一组输入：

```powershell
Get-Content -Raw .\cases\HJ5-multi.in | node .\solutions\HJ5.js
```

核心代码模式示例：

```powershell
node --test .\tests\current-HJ<编号>.test.js
```

也可以直接使用字符串输入：

```powershell
'hello nowcoder' | node .\solutions\HJ1.js
```

如果程序没有输出，优先检查：是否忘记 `console.log`、输入文件是否为空、是否在错误的目录执行、文件中是否仍是 TODO。

## 测试与验收

本地测试通过不等于题目完成。每题至少经过三层验证：

1. 官方样例或题单样例。
2. 自造边界样例。
3. 练习平台隐藏测试。

完成一道题的标准：

- 能用自己的话解释题意。
- 能说明为什么选择当前算法。
- 能说出时间复杂度和空间复杂度。
- 能指出至少两个边界情况。
- 不看题解重新写出并通过测试。

## 当前流程

当前建议顺序：

```text
HJ1 -> HJ2 -> HJ4 -> HJ5 -> HJ6 -> HJ8 -> HJ10 -> HJ14
```

当前活跃练习只覆盖考试范围：位运算/进制转换、字符串、数组、队列与栈、链表、Map/Set、排序与查找、枚举、滑动窗口、双指针和前缀和。动态规划、图搜索、并查集、贪心等内容不进入当前训练计划。

## Git 管理建议

在本目录根路径初始化仓库：

```powershell
git init
git add README.md .gitignore solutions cases docs notes
git commit -m "建立算法练习目录"
```

之后每完成一组相关题目再提交一次，例如：

```powershell
git add solutions cases notes
git commit -m "完成字符串与哈希基础题"
```

提交前检查：

```powershell
git status
git diff --check
```

不要提交账号、密码、个人联系方式、平台 Cookie 或与题目无关的临时文件。
