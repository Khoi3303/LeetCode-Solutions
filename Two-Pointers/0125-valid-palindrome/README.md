# 125. Valid Palindrome

- **Difficulty**: Easy
- **Topic**: Two Pointers
- **Link**: [LeetCode #125](https://leetcode.com/problems/valid-palindrome/)

## Intuition & Approach
- Instead of allocating extra memory to filter and reverse the string, we use two pointers starting from both boundaries (`left = 0`, `right = s.length - 1`).
- Skip non-alphanumeric characters on the fly using ASCII checks.
- Compare characters case-insensitively and shrink the window towards the center.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Single pass over the string length.
- **Space Complexity**: $O(1)$ — Constant extra space used.