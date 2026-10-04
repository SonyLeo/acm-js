// 有效括号匹配
// 参数：text，只由 ()[]{} 六种括号字符组成的字符串。
// 返回：所有括号是否都能正确配对、且嵌套顺序正确。
// 示例：isValidBrackets('([])') -> true；isValidBrackets('([)]') -> false。

/**
 * @param {string} text
 * @returns {boolean}
 */
function isValidBrackets(text) {
  // TODO:
  // 1. 遇到左括号时压入栈。
  // 2. 遇到右括号时，取出最后一个左括号并检查类型是否匹配。
  // 3. 最后栈必须为空，才说明没有遗留的左括号。

  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack = []


  for (const bracket of text) {
    if(bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket)
    } else {
      const lastLeftBracket = stack.pop()

      if(lastLeftBracket !== pairs[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = { isValidBrackets };
