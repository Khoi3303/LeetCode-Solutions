/**
 * Problem: LeetCode 20 - Valid Parentheses
 * Approach: Stack (LIFO)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function isValid(s) {
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // Nếu gặp ngoặc đóng mà stack rỗng hoặc không khớp với đỉnh stack
            const top = stack.pop();
            if (top !== bracketMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

module.exports = isValid;