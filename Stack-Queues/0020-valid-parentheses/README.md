# 20. Valid Parentheses

- **Difficulty**: Easy
- **Topic**: Stack & Queues
- **Link**: [LeetCode #20](https://leetcode.com/problems/valid-parentheses/)

## Intuition & Approach
- Parentheses validation enforces a Last-In-First-Out (LIFO) order, making a Stack the optimal data structure.
- If the string length is odd, it is immediately invalid.
- Iterate through each character:
  - Push opening brackets onto the stack.
  - When encountering a closing bracket, pop the top element and verify if it matches via a lookup hash map.
- The string is valid if and only if the stack is completely empty after the scan.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Single pass across the length of string $s$.
- **Space Complexity**: $O(N)$ — In the worst-case scenario (e.g., `"(((((("`), the stack stores all characters.