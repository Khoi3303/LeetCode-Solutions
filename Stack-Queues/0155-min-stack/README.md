# 155. Min Stack

- **Difficulty**: Medium
- **Topic**: Stack & Queues
- **Link**: [LeetCode #155](https://leetcode.com/problems/min-stack/)

## Intuition & Approach
- A single stack cannot provide the minimum value in $O(1)$ without continuous scanning ($O(N)$).
- We maintain a parallel auxiliary stack (`minStack`) that stores the minimum value observed up to each stack height.
- **Push**: Add the new value to `stack`, and push `min(val, currentMin)` onto `minStack`.
- **Pop**: Pop simultaneously from both stacks to keep state transitions in sync.
- **Top / GetMin**: Return the top element of `stack` and `minStack` respectively.

## Complexity Analysis
- **Time Complexity**: $O(1)$ across all operations (`push`, `pop`, `top`, `getMin`).
- **Space Complexity**: $O(N)$ — An auxiliary stack tracks the minimum prefix history matching the primary stack's size.