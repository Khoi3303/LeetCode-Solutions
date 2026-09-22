# 238. Product of Array Except Self

- **Difficulty**: Medium
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #238](https://leetcode.com/problems/product-of-array-except-self/)

## Intuition & Approach
- Division is prohibited by the problem constraint.
- The product of all numbers except `nums[i]` equals `(Prefix product before i) * (Suffix product after i)`.
- We initialize the output array storing prefix products from left to right, then use a running suffix variable from right to left to multiply into the array in-place.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Two sequential passes over the array.
- **Space Complexity**: $O(1)$ — Auxiliary space is constant since the output array does not count toward extra space.