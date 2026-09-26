/**
 * Problem: LeetCode 155 - Min Stack
 * Approach: Two Stacks (Value Stack & Min Tracking Stack)
 * Time Complexity: O(1) cho tất cả các thao tác (push, pop, top, getMin)
 * Space Complexity: O(N)
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        // Nếu minStack rỗng, hoặc val nhỏ hơn/bằng giá trị nhỏ nhất hiện tại
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

module.exports = MinStack;