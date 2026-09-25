# 167. Two Sum II - Input Array Is Sorted

- **Difficulty**: Medium
- **Topic**: Two Pointers
- **Link**: [LeetCode #167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Intuition & Approach
- Given that the array is already sorted, we can avoid the $O(N)$ space hash map from LeetCode 1.
- We place two pointers at opposite ends (`left = 0`, `right = numbers.length - 1`).
- If the current sum is less than the target, increment `left` to increase the sum.
- If the current sum is greater than the target, decrement `right` to reduce the sum.
- Repeat until the exact match is located.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — In the worst case, each element is examined at most once.
- **Space Complexity**: $O(1)$ — Only two pointer variables are used.