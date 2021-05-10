/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for (const sElement of s) {
        const isRightMinParentheses = (sElement === ')' && stack.length > 0 && stack[stack.length - 1] === '(')
        const isRightMiddleParentheses = (sElement === ']' && stack.length > 0 && stack[stack.length - 1] === '[')
        const isRightMaxParentheses = (sElement === '}' && stack.length > 0 && stack[stack.length - 1] === '{')
        if (sElement === '(' || sElement === "[" || sElement === '{') {
            stack.push(sElement)
        } else if (isRightMinParentheses || isRightMiddleParentheses || isRightMaxParentheses) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};
