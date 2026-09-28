/**
 * Problem: LeetCode 150 - Evaluate Reverse Polish Notation
 * Approach: Stack Evaluation
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function evalRPN(tokens) {
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (const token of tokens) {
        if (token in operators) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operators[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
}

module.exports = evalRPN;