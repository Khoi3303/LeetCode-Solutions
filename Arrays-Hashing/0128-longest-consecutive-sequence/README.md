# 128. Longest Consecutive Sequence

- **Difficulty**: Medium
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #128](https://leetcode.com/problems/longest-consecutive-sequence/)

## Intuition & Approach
- Sorting takes $O(N \log N)$, which violates constraints.
- We insert all elements into a Hash Set for $O(1)$ membership checks.
- We iterate through numbers, identifying streak starting points (`num - 1` is not in the set). Only from starting points do we count successive numbers (`num + 1`, `num + 2`, ...). Each number is visited at most twice.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Linear scan with constant-time set lookups.
- **Space Complexity**: $O(N)$ — Hash Set stores up to $N$ unique elements.