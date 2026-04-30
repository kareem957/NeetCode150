class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let i = 0, n = tokens.length; i < n; i++) {
            const t = tokens[i];
            switch (t) {
                case "+": {
                    const b = stack.pop();
                    stack.push(stack.pop() + b);
                    break;
                }       
                case "-": {
                    const b = stack.pop();
                    stack.push(stack.pop() - b);
                    break;
                }
                case "*": {
                    const b = stack.pop();
                    stack.push(stack.pop() * b);
                    break;
                }
                case "/": {
                    const b = stack.pop();
                    stack.push(Math.trunc(stack.pop() / b));
                    break;
                }
                default:
                    stack.push(+t);
            }
        }
        return stack.at(-1);
    }
}

const solution = new Solution();
const tokens = ["2", "1", "+", "3", "*"];
const result = solution.evalRPN(tokens);
console.log(result);
