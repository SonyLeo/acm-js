# VS Code 调试 JavaScript ACM 题

算法题应当先用样例和边界用例验证，再提交。调试不是替代思考，而是帮助确认“输入解析、循环状态、排序规则、输出格式”到底在哪一步偏离预期。

## 一次最小调试流程

以 HJ102 为例：

1. 打开 `solutions/current-HJ102.js` 和一个 `cases/current-HJ102*.in` 用例。
2. 在需要观察的语句左侧单击，添加断点。
3. 在 VS Code 按 `Ctrl+Shift+D`，选择 `Run and Debug`，创建或选择 Node.js 调试配置。
4. 用下方的“管道输入 + 附加调试器”方法运行程序。
5. 在左侧 Variables 观察变量，在 Debug Console 输入表达式验证假设；用 `F10` 单步执行，`F11` 进入函数，`F5` 继续运行。

## ACM 标准输入的可靠调试方法

算法程序从标准输入读取数据：

```js
const input = fs.readFileSync(0, 'utf8').trimEnd();
```

这种程序在 VS Code 直接启动时不方便喂入文件内容。更可靠的做法是先在集成终端启动带调试端口的 Node 进程：

```powershell
Get-Content -Raw .\cases\current-HJ102.in | node --inspect-brk .\solutions\current-HJ102.js
```

`--inspect-brk` 会让程序在第一行暂停，并打开默认的 `9229` 调试端口。然后在 VS Code 的 `launch.json` 中加入：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Node ACM",
      "port": 9229,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

选择 `Attach to Node ACM` 并按 `F5` 后，断点会生效。程序结束后，终端进程和附加调试都会结束；下一次调试重新执行上面的管道命令即可。

## 用 HJ80 找输入错误

HJ80 的输入包含两个数组长度，推荐在以下位置设断点：

```js
const tokens = input.split(/\s+/).map(Number);
let position = 0;

const len1 = tokens[position++];
const arr1 = tokens.slice(position, position + len1);
position += len1;

const len2 = tokens[position++];
const arr2 = tokens.slice(position, position + len2);
```

使用这个输入：

```text
3
1  2 2
3
2 3 4
```

单步检查应看到：

|执行位置|`position`|得到的值|
|---|---:|---|
|读完 `len1`|1|`len1 = 3`|
|读完 `arr1`|4|`[1, 2, 2]`|
|读完 `len2`|5|`len2 = 3`|
|读完 `arr2`|8|`[2, 3, 4]`|

如果 `tokens` 中出现意外的 `0`，通常是使用了 `split(' ')`，连续空格产生了空字符串，随后 `Number('')` 变成了 `0`。`split(/\s+/)` 才能将连续空白视为一个分隔符。

## 用 HJ102 找排序错误

HJ102 的重点不是先排序输入，而是对频次表的条目做双关键字排序：

```js
const entries = [...map.entries()];

entries.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }

  return a[0].charCodeAt(0) - b[0].charCodeAt(0);
});
```

对 `aaddccdc`，断点处的 `entries` 应先是：

```js
[['a', 2], ['d', 3], ['c', 3]]
```

排序后应为：

```js
[['c', 3], ['d', 3], ['a', 2]]
```

这里验证两件事：频次先降序；`c` 与 `d` 同频时，ASCII 码较小的 `c` 在前。若比较器只返回 `b[1] - a[1]`，同频字符的次序没有被题目规则明确处理。

## 每次写完后的检查清单

1. 用公开样例运行一次。
2. 用两个针对风险的用例运行，例如重复值、连续空格、同频排序、空输出。
3. 输出不符合预期时，先在“输入解析完成后”“核心循环内部”“输出前”各设一个断点。
4. 用 Variables 确认变量实际值，不根据代码表面含义猜测。
5. 修复后重新运行所有用例，避免只修好当前样例。

调试时可以临时观察变量，但提交前删除额外的 `console.log`，最终程序只保留题目要求的输出。
