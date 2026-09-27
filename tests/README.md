# 核心代码模式测试

新题的测试文件使用 Node.js 原生测试模块：

```powershell
node --test .\tests\current-HJ<编号>.test.js
```

每个测试直接调用 `solutions/current-HJ<编号>.js` 导出的核心函数，并断言返回值。用户只修改解答文件中的算法函数，不修改测试文件，除非明确需要调整题目用例。
