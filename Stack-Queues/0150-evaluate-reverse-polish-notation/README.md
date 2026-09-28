# 150. Evaluate Reverse Polish Notation

- **Difficulty**: Medium
- **Topic**: Stack & Queues
- **Link**: [LeetCode #150](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## Intuition & Approach
- Postfix evaluation matches a Stack's LIFO mechanics: operands are staged until an operator is encountered.
- Traverse through tokens:
  - Numbers are parsed and pushed onto the stack.
  - Operators pop the last two operands (`b`, then `a`), apply the operation `a op b`, and push the result back.
- Use `Math.trunc()` to handle integer truncation toward zero as required.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Single scan through all tokens.
- **Space Complexity**: $O(N)$ — Stack stores operands proportional to input size.