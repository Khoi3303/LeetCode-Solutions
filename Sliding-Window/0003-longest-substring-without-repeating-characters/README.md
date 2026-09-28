# 3. Longest Substring Without Repeating Characters

- **Difficulty**: Medium
- **Topic**: Sliding Window
- **Link**: [LeetCode #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Intuition & Approach
- Use a dynamic sliding window `[left, right]` combined with a Hash Set to track unique characters.
- As the `right` pointer expands the window, if `s[right]` already exists in the set, shrink the window from the `left` until the duplicate character is removed.
- Insert `s[right]` into the set and update the maximum window size (`right - left + 1`).

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Each character is visited at most twice (once by `right`, once by `left`).
- **Space Complexity**: $O(\min(N, M))$ — Space bounded by string length $N$ and character set size $M$.