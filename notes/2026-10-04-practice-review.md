# 2026-10-04 算法练习复盘

## 今日结果

今天完成了位运算/协议解析、字符串与二维数组、队列与栈共 9 个练习或复写；所有已归档题均已通过本地 Node 原生自动测试。本地通过不等于练习平台已 AC，当前记录状态统一为“本地完成”。

| 模块 | 题目 | 训练目标 | 状态 |
| --- | --- | --- | --- |
| 位运算/进制 | 魔法校验和 | 十六进制字节、大端、异或、无符号输出 | 本地完成 |
| 位运算/协议解析 | IPv4 报文头解析 | 位字段、掩码、跨字节拼接 | 本地完成 |
| 字符串/数位 | HJ11 数字颠倒 | 逐位取数与反转 | 本地完成 |
| 字符串/双指针 | HJ12 字符串反转 | 相向双指针交换 | 本地完成 |
| 字符串 | HJ13 句子逆序 | 分词、数组反转、重新拼接 | 本地完成 |
| 二维数组 | 列最大值的最小值 | 按列维护状态、负数边界 | 闭卷复写通过 |
| 字符串/双指针 | 最长回文子串 | 中心扩展、全局最优区间 | 本地完成 |
| 队列 | 基础队列模拟 | `head` 指针、FIFO | 本地完成 |
| 栈 | 有效括号匹配 | LIFO、匹配映射、提前失败 | 本地完成 |

明天从“链表倒数第 k 个节点”继续。该题只有骨架与测试，尚未实现，不计入今日完成。

---

## 1. 魔法校验和

### 题目模型

输入若干十六进制字节。字节数不足 4 的倍数时补 `FF`；每 4 个字节按大端拼为一个 32 位整数；所有 32 位整数依次异或；结果输出为固定 8 位大写十六进制。

### 固定流程

```text
十六进制字符串数组
  → parseInt(byte, 16)
  → 补齐至 4 的倍数
  → 每 4 字节按大端拼 32 位整数
  → 依次 XOR
  → 无符号化、转十六进制、大写、补足 8 位
```

```js
while (bytes.length % 4 !== 0) {
  bytes.push(0xFF);
}

for (let i = 0; i < bytes.length; i += 4) {
  const word =
    (bytes[i] << 24) |
    (bytes[i + 1] << 16) |
    (bytes[i + 2] << 8) |
    bytes[i + 3];
  checksum ^= word;
}

return (checksum >>> 0).toString(16).toUpperCase().padStart(8, '0');
```

### 必须记住

```text
大端：先出现的字节放高位。
循环步长：按 4 字节分组，必须 i += 4，不能 i++。
JS 位运算：内部按 32 位有符号整数做运算；输出十六进制前用 >>> 0 按无符号解释。
格式：toUpperCase() + padStart(8, '0') 对应“8 位大写十六进制”。
```

### 易错点

- 写成 `i++` 会把相邻 4 字节窗口重叠计算。
- 忘记补齐会让最后一组长度不足 4。
- 把异或理解成十进制减法是错误的：异或逐位比较，不产生借位。
- 直接对负的 32 位结果 `toString(16)`，会得到负号，不符合校验和格式。

### 复杂度

时间 `O(n)`；额外空间 `O(n)`（当前实现保存已解析和补齐后的字节数组）。

---

## 2. IPv4 报文头解析

### 题目模型

输入固定 20 个十六进制字节，按网络字节序（大端）解析 IPv4 固定头字段，返回对象。

### 字段定位表

| 字节下标 | 字段 | 取法 |
| --- | --- | --- |
| `0` 高 4 位 | 版本 | `bytes[0] >> 4` |
| `0` 低 4 位 | 首部长度（单位 4 字节） | `(bytes[0] & 0x0F) * 4` |
| `1` | TOS | `bytes[1]` |
| `2-3` | 总长度 | `(bytes[2] << 8) \| bytes[3]` |
| `4-5` | 标识 | `(bytes[4] << 8) \| bytes[5]` |
| `6` 高 3 位 | 标志 | `bytes[6] >> 5` |
| `6` 低 5 位 + `7` | 片偏移 | `((bytes[6] & 0x1F) << 8) \| bytes[7]` |
| `8` | TTL | `bytes[8]` |
| `9` | 协议 | `bytes[9]` |
| `10-11` | 首部校验和 | `(bytes[10] << 8) \| bytes[11]` |
| `12-15` | 源 IP | 4 个十进制字节以 `.` 拼接 |
| `16-19` | 目的 IP | 4 个十进制字节以 `.` 拼接 |

### 通用位字段模板

```js
// 整个字节
const value = bytes[i];

// 高 n 位
const high = bytes[i] >> (8 - n);

// 低 n 位
const low = bytes[i] & ((1 << n) - 1);

// 中间一段：先右移到低位，再掩码
const field = (bytes[i] >> shift) & mask;

// 两字节大端拼接
const number16 = (highByte << 8) | lowByte;

// 跨字节字段：先保留高字节中的有效低位，再左移拼低字节
const crossField = ((firstByte & mask) << 8) | secondByte;
```

### `& 0x0F` 的真实含义

```text
0x45 = 0100 0101
0x0F = 0000 1111
&      ----------
       0000 0101 = 5
```

掩码中为 `1` 的位保留，为 `0` 的位清除。因此 `0x0F` 正好保留低 4 位。

### 必须记住

> 先查字段布局，整字节直取；高位右移，低位掩码；跨字节时高字节在前，先左移腾位再按位或拼接。

协议题不能靠数据值猜字段。必须先知道字段的字节范围、位范围、字节序与单位。

### 复杂度

固定 20 字节，实践中为 `O(1)`；若泛化到固定格式的长度 `n`，解析为 `O(n)`。

---

## 3. HJ11 数字颠倒

### 两种合法解法

最直接的字符串方案：

```js
return Number(value.toString().split('').reverse().join(''));
```

它会自然移除反转后的前导零：`'0006151'` 转 `Number` 后为 `6151`。

更值得背诵的是逐位取数方案：

```js
let n = value;
let result = 0;

while (n > 0) {
  const digit = n % 10;
  result = result * 10 + digit;
  n = Math.floor(n / 10);
}

return result;
```

### 逐位模板与进制转换的关系

```js
digit = n % base;             // 取最低位
n = Math.floor(n / base);     // 删除最低位

result = result * base + digit; // 从高位到低位拼结果
```

HJ11 中 `base` 是 `10`。这个模板还可用于数位和、整数回文、各位统计、其他进制下的逐位处理。

### 边界

- `1516000 → 6151`：末尾的零反转后成为前导零。
- `1000 → 1`。
- 单个数字保持不变。
- 当前参数是 `Number`；若题目允许超过安全整数范围，不能再把原数当普通 `Number`，应改用字符串或 `BigInt`。

---

## 4. HJ12 字符串反转

### 双指针模板

JavaScript 字符串不可原地修改，因此先转数组：

```js
const chars = text.split('');
let left = 0;
let right = chars.length - 1;

while (left < right) {
  [chars[left], chars[right]] = [chars[right], chars[left]];
  left++;
  right--;
}

return chars.join('');
```

### 可迁移模板

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // 处理 arr[left] 与 arr[right]
  left++;
  right--;
}
```

适用场景：反转、回文判断、两端比较、两端交换。

### 易错点

- 循环条件用 `left < right`，相遇或交错就停止；中点无需再交换。
- `split('')` 对普通英文题足够；更稳地处理 emoji 等 Unicode 字符时可使用 `Array.from(text)`。

### 复杂度

时间 `O(n)`；额外空间 `O(n)`。

---

## 5. HJ13 句子逆序

### 题目模型

反转“单词顺序”，不要反转单词内部字符：

```text
I am a boy → boy a am I
```

### 推荐写法

```js
return sentence.trim().split(/\s+/).reverse().join(' ');
```

### 为什么使用 `/\s+/`

如果输入保证单词之间恰好一个空格，以下写法完全正确：

```js
sentence.split(' ').reverse().join(' ');
```

但连续空格会产生空字符串元素：

```js
'we  love   JavaScript'.split(' ')
// ['we', '', 'love', '', '', 'JavaScript']
```

`trim().split(/\s+/)` 会将连续的一个或多个空白字符当作一次分隔，输出规范的单空格结果：

```text
JavaScript love we
```

### 易错点

- 题目若要求严格保留原始空格位置，就不能用这个方案；本题模型是按单词重排，因此标准化空格是合理的。
- 不要误用 HJ12 的字符反转；此题反转的是单词数组。

### 复杂度

时间 `O(n)`；额外空间 `O(n)`。

---

## 6. 二维数组：每列最大值的最小值

### 题目模型

```js
[
  [3, 1, 7],
  [2, 8, 4],
  [5, 6, 9],
]
```

先得每列最大值 `[5, 8, 9]`，最终返回 `5`。

### 状态维护模板

```js
const rowCount = matrix.length;
const colCount = matrix[0].length;
const colMax = new Array(colCount).fill(-Infinity);

for (let col = 0; col < colCount; col++) {
  for (let row = 0; row < rowCount; row++) {
    if (matrix[row][col] > colMax[col]) {
      colMax[col] = matrix[row][col];
    }
  }
}

return Math.min(...colMax);
```

### 循环不变量

> 当第 `col` 列的内层循环结束时，`colMax[col]` 是该列所有已扫描行元素的最大值。

### 易错点

- 求“列”的状态时，访问形式是 `matrix[row][col]`。
- 初始最大值不能写成 `0`，因为矩阵可能全为负数；应使用 `-Infinity`。
- 只含一行时，列最大值就是该行每个元素；全负数也必须正确。

### 复杂度

时间 `O(rows × cols)`；额外空间 `O(cols)`。

---

## 7. 最长回文子串

### 题目模型

返回最长的连续回文子串：

```text
babad → bab 或 aba
cbbd  → bb
```

### 最重要的理解

“奇数中心、偶数中心”说的是候选回文子串的长度，不是整个输入字符串长度。

```text
奇数回文 aba：中心是一个字符 b，调用 expand(i, i)
偶数回文 abba：中心在两个 b 之间，调用 expand(i, i + 1)
```

最长回文可以位于任意位置，不能只检查整串中间。例如：

```text
xyabccz
最长回文是 cc，不在整串中心，且长度为偶数。
```

### 推荐模板：中心扩展 + 记录最优区间

```js
function longestPalindrome(text) {
  let bestStart = 0;
  let bestLength = 0;

  function expand(left, right) {
    while (
      left >= 0 &&
      right < text.length &&
      text[left] === text[right]
    ) {
      left--;
      right++;
    }

    // 停止时 left、right 已各多走了一步。
    const start = left + 1;
    const length = right - left - 1;

    if (length > bestLength) {
      bestStart = start;
      bestLength = length;
    }
  }

  for (let i = 0; i < text.length; i++) {
    expand(i, i);       // 奇数中心
    expand(i, i + 1);   // 偶数中心
  }

  return text.slice(bestStart, bestStart + bestLength);
}
```

### 为什么是 `slice(left + 1, right)`

扩展循环结束时，有效回文范围为闭区间：

```text
[left + 1, right - 1]
```

`slice(start, end)` 的 `end` 不包含，因此正好写成：

```js
text.slice(left + 1, right);
```

区间长度为：

```text
(right - 1) - (left + 1) + 1 = right - left - 1
```

### 今天出现的关键错误

1. **只检查整串中心。**

   错误原因：最长回文的中心位置未知，且长度奇偶性与整串无关。

2. **本轮候选直接覆盖历史最长答案。**

   错误写法：

   ```js
   longest = even.length > odd.length ? even : odd;
   ```

   它只能保存“最后一个中心”的较好候选。正确原则是：

   ```text
   本轮候选只有比历史答案更好时，才能覆盖历史答案。
   ```

3. **遗漏偶数中心。**

   只写 `expand(i, i)` 永远找不到 `bb`、`abba`。

### 背诵模板

> 每个位置都是中心；奇数同点，偶数相邻；相等向外扩；扩完更新最长区间。

### 复杂度

时间 `O(n²)`；额外空间 `O(1)`（不计返回字符串）。

---

## 8. 基础队列模拟

### 队列模型

队列是 FIFO：First In, First Out，先进先出。

```text
enqueue 10
enqueue 20
front      → 10
dequeue    → 10（10 离开队列）
front      → 20
```

测试的结果数组为：

```js
[10, 10, 20]
```

### 推荐实现：数组 + `head`

```js
const queue = [];
const results = [];
let head = 0;

for (const operation of operations) {
  if (operation.type === 'enqueue') {
    queue.push(operation.value);
  } else if (operation.type === 'front') {
    results.push(queue[head]);
  } else if (operation.type === 'dequeue') {
    results.push(queue[head]);
    head++;
  }
}

return results;
```

### 核心状态与不变量

```text
queue：存放所有曾经入队的元素。
head：当前逻辑队首下标。
head 左边的元素：已经出队的历史数据。
queue[head]：当前队首。
```

> 每轮操作结束后，`queue[head]`（队列非空时）必须是下一个应被处理的元素。

### 为什么不使用 `shift()`

```js
queue.shift(); // 会移动后续所有元素，单次可能 O(n)
```

而：

```js
head++; // 只改变逻辑队首，O(1)
```

### 今天出现的关键错误

- `operation` 是对象，例如 `{ type: 'enqueue', value: 10 }`，不是字符串；应写 `operation.type === 'enqueue'`。
- `head` 要递增，因此必须用 `let`，不能用 `const`。
- `queue[head]` 单独出现只是读取、不会保存结果；`dequeue` 必须先 `results.push(queue[head])`，再 `head++`。
- `front` 只查看，不能移动 `head`。

### 与后续题的联系

- 任务/消息/打印的先到先处理。
- 滑动窗口中的左指针持续右移。
- 解析输入时的 `tokens[position++]`：先读当前位置，再移动位置，与 `queue[head++]` 的思想一致。

### 复杂度

每次操作 `O(1)`，总时间 `O(operations.length)`；额外空间 `O(operations.length)`。

---

## 9. 有效括号匹配

### 题目模型

```text
([]){} → true
([)]   → false
(([]   → false
```

### 为什么用栈

右括号必须匹配“最近一个尚未匹配的左括号”。“最近一个”就是后进先出（LIFO），所以使用栈。

```js
stack.push(leftBracket); // 压栈
stack.pop();             // 取出最近的未匹配左括号
```

### 推荐模板

```js
const pairs = {
  ')': '(',
  ']': '[',
  '}': '{',
};
const stack = [];

for (const bracket of text) {
  if (bracket === '(' || bracket === '[' || bracket === '{') {
    stack.push(bracket);
  } else {
    const lastLeftBracket = stack.pop();

    if (lastLeftBracket !== pairs[bracket]) {
      return false;
    }
  }
}

return stack.length === 0;
```

### 手推 `([)]`

```text
遇到 (：stack = ['(']
遇到 [：stack = ['(', '[']
遇到 )：期望弹出 (，实际弹出 [，不匹配，立即 false
```

### 易错点

- 左右括号字符本身不相等：`'(' !== ')'`；必须通过映射判断右括号需要什么左括号。
- 数组没有 `.size()`；数组元素数量是 `.length`。
- 遇到不匹配必须立即 `return false`，不能继续扫描。
- 输入以右括号开头时，`pop()` 返回 `undefined`；它与期待左括号不相等，能自然判为 `false`。
- 遍历结束后栈不为空，说明有遗留左括号，仍应返回 `false`。

### 不变量

> 扫描到任意位置时，`stack` 从底到顶依次保存所有尚未匹配的左括号；栈顶一定是下一个右括号唯一允许匹配的左括号。

### 复杂度

时间 `O(n)`；额外空间最坏 `O(n)`。

---

## 今日可迁移模板总表

| 模板 | 固定动作 | 典型题 |
| --- | --- | --- |
| 数位/进制 | `% base` 取低位；`Math.floor(/ base)` 去低位；`result * base + digit` 拼位 | 数字反转、数位和、进制转换 |
| 位字段解析 | 高位右移、低位掩码、左移后按位或拼接 | IPv4、二进制协议、字节流 |
| 相向双指针 | `left=0`、`right=n-1`、处理后双向移动 | 反转、回文判断 |
| 分词重排 | `trim → split(/\s+/) → reverse → join(' ')` | 句子逆序 |
| 二维列状态 | 为每列建立状态数组，外列内行更新 | 每列最大/最小、列累计值 |
| 中心扩展 | `(i,i)` + `(i,i+1)`，相等持续向外扩 | 最长回文子串 |
| 全局最优 | 候选值仅在比历史答案更好时覆盖 | 最大/最小/最长/最短题 |
| 队列 | `push` 入队，`queue[head]` 看队首，`head++` 出队 | 任务模拟、按序处理 |
| 栈 | `push` 暂存，`pop` 处理最近未完成状态 | 括号匹配、撤销、表达式 |

## 今日高频错误清单

1. **不能把“本轮答案”直接当作“全局答案”。**

   先算 `candidate`，再判断是否比 `best` 更好。

2. **先看数据真实类型，再选 API。**

   - 数组：`.length`、`.push()`、`.pop()`。
   - 对象：用 `operation.type` 读取字段。
   - `Set` / `Map`：才有 `.size` 属性，不是 `.size()`。

3. **每个指针都要说清楚何时移动。**

   - 队列：只在 `dequeue` 后 `head++`。
   - 相向双指针：每次比较或交换后两边移动。
   - 中心扩展：字符相等才继续向外移动。

4. **初始化必须覆盖题目取值范围。**

   维护最大值时，数据可能有负数就用 `-Infinity`，不要默认 `0`。

5. **边界不只靠“感觉通过”。**

   每题至少考虑：空值（题目允许时）、单元素、重复、全负数、特殊位置（开头/末尾/不在整体中心）、结构不完整。

## 明日建议

1. 先不看答案，口述并手写“有效括号匹配”的栈不变量与核心循环。
2. 开始 [链表倒数第 k 个节点](/D:/Projects/Work/school-algorithm-practice/solutions/current-kth-from-end.js)，重点手推 `fast` 先走 `k` 步后的距离差。
3. 完成后安排一次短复写：任选 HJ11 或队列模拟，限制 10 分钟，不看历史代码。
4. 可选 VS Code 调试：在链表题中观察 `fast.value`、`slow.value`，确认两指针始终相差 `k` 个节点。
