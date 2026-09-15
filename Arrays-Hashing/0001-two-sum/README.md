# 1. Two Sum

- **Difficulty**: Easy
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #1](https://leetcode.com/problems/two-sum/)

## Intuition & Approach
Using a brute-force nested loop takes $O(N^2)$ time. By trading memory for time, we store visited numbers and their indices in a Hash Map, allowing $O(1)$ lookup for the complementary value `target - num`.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Single pass through the array.
- **Space Complexity**: $O(N)$ — In the worst case, stores $N$ elements in the map.