# 11. Container With Most Water

- **Difficulty**: Medium
- **Topic**: Two Pointers
- **Link**: [LeetCode #11](https://leetcode.com/problems/container-with-most-water/)

## Intuition & Approach
- The volume of trapped water is constrained by the shorter boundary: `(right - left) * min(height[left], height[right])`.
- Starting from maximal width (`left = 0`, `right = n - 1`), shrinking the boundary can only increase volume if we find a taller wall.
- Hence, we greedily advance the pointer holding the shorter column at each step.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Each element is inspected by pointer convergence.
- **Space Complexity**: $O(1)$ — Constant memory allocation.