# 49. Group Anagrams

- **Difficulty**: Medium
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #49](https://leetcode.com/problems/group-anagrams/)

## Intuition & Approach
- Two strings are anagrams if and only if their sorted versions are equal.
- We iterate through each string in `strs`, sort its characters alphabetically to create a canonical `key`, and group original strings into a Hash Map (`Map<string, string[]>`).
- Finally, return all map values as a 2D array.

## Complexity Analysis
- **Time Complexity**: $O(N \cdot K \log K)$, where $N$ is the number of strings and $K$ is the maximum length of a string in `strs`. Sorting each string takes $O(K \log K)$.
- **Space Complexity**: $O(N \cdot K)$, representing the storage required to hold the grouped strings inside the Hash Map.