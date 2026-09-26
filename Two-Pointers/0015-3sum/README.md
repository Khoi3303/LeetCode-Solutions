# 15. 3Sum

- **Difficulty**: Medium
- **Topic**: Two Pointers
- **Link**: [LeetCode #15](https://leetcode.com/problems/3sum/)

## Intuition & Approach
- Sorting the array in $O(N \log N)$ unlocks efficient two-pointer sweeps and straightforward duplicate pruning.
- Fix the first number `nums[i]` with an outer loop. If `nums[i] > 0`, terminate early because subsequent sums cannot yield zero.
- For each fixed index, run a two-pointer search (`left` and `right`) to find zero-sum triplets.
- Skip identical adjacent elements for both the outer index and internal pointers to ensure distinct triplets.

## Complexity Analysis
- **Time Complexity**: $O(N^2)$ — Outer loop runs $N$ times, inner two-pointer scan takes $O(N)$.
- **Space Complexity**: $O(1)$ auxiliary space excluding sorting engine requirements and the output array.