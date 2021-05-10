/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLength = 0
    const stack = [-1]
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c === '(') {
            stack.push(i)
            continue;
        }
        stack.pop();
        if (stack.length === 0) {
            stack.push(i)
        } else {
            maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        }
    }
    return maxLength
}
