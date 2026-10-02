# VS Code 调试 JavaScript 核心代码题

核心代码模式中，解答文件只导出函数，测试文件自动传入参数并校验返回值。这样调试时可以直接观察函数参数、局部变量和返回值，不需要处理标准输入。F5 断点调试是完成算法后的可选验证练习，不替代手算和自动测试，也不要求每题都执行。

## 文件职责

```text
solutions/current-HJxxx.js     只写核心函数
tests/current-HJxxx.test.js    构造参数、调用函数、断言结果
```

核心函数通常采用 CommonJS 导出：

```js
function mergeUniqueSorted(nums1, nums2) {
  // TODO
}

module.exports = { mergeUniqueSorted };
```

测试文件调用它：

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { mergeUniqueSorted } = require('../solutions/current-HJ80');

test('公开样例', () => {
  assert.deepEqual(
    mergeUniqueSorted([1, 2, 2], [2, 3, 4]),
    [1, 2, 3, 4],
  );
});
```

## 运行测试

在仓库根目录执行：

```powershell
node --test .\tests\current-HJ<编号>.test.js
```

Node 会显示每个用例是否通过；失败时会同时显示实际返回值与预期返回值。修改算法后必须重跑全部三组测试。

## 在 VS Code 中断点调试（可选）

项目已提供 `.vscode/launch.json`。操作步骤：

1. 打开当前题的 `tests/current-HJ<编号>.test.js`。
2. 在解答函数的关键位置设断点，例如循环开始、状态更新、返回前。
3. 按 `Ctrl+Shift+D` 打开 Run and Debug，选择 `Debug active core test`，按 `F5`。
4. 断点停下后，在 Variables 面板观察函数参数、循环下标、Map/Set 内容和 `result`。
5. `F10` 单步执行当前行，`F11` 进入函数，`F5` 继续到下一个断点。

配置会把当前打开的测试文件作为 `node --test` 的目标，所以调试前应确认编辑器焦点在 `.test.js` 文件而不是解答文件。

## 以数组去重排序为例

假设核心函数为：

```js
function mergeUniqueSorted(nums1, nums2) {
  const merged = [...nums1, ...nums2];
  const unique = [...new Set(merged)];
  return unique.sort((a, b) => a - b);
}
```

使用测试参数：

```js
nums1 = [10, 2, 10, 1]
nums2 = [3, 2, 1]
```

在每一步检查：

|位置|应观察到的值|
|---|---|
|`merged` 创建后|`[10, 2, 10, 1, 3, 2, 1]`|
|`unique` 创建后|`[10, 2, 1, 3]`|
|返回前|`[1, 2, 3, 10]`|

这能快速定位错误属于合并、去重，还是排序。核心代码模式的常见错误也更容易区分：返回了错误类型、漏掉边界、原地修改了不应修改的参数，或比较器不符合题目规则。

## 写完后的最小流程

1. 先手算公开样例的参数与返回值。
2. 运行三组自动测试。
3. 有失败时，先在测试断言前和核心循环内设断点，比较“实际变量”与手算过程。
4. 修复后重跑全部测试，而不是只跑失败的一个。
5. 提交前删除核心函数中的临时 `console.log`。

## 每题的调试练习

题目通过后，可选择一个公开样例进行手动调试。陪练总结会明确给出：

1. 适合设置断点的语句。
2. 建议添加到 Watch 的变量。
3. 单步时应出现的关键状态变化。

例如双指针题应观察左右指针与交换结果；Map 题应观察频次表；排序题应观察排序前后的条目数组。调试目标是验证自己的循环不变量，而不是为了让测试通过才盲目单步。
