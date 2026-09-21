# 347. Top K Frequent Elements

- **Difficulty**: Medium
- **Topic**: Arrays & Hashing
- **Link**: [LeetCode #347](https://leetcode.com/problems/top-k-frequent-elements/)

## Intuition & Approach
- Sorting the map entries by frequency takes $O(N \log N)$ or using a Min-Heap takes $O(N \log k)$.
- To achieve strictly linear time $O(N)$, we employ the **Bucket Sort** technique:
  1. Count occurrences of each number using a Hash Map.
  2. Create an array of buckets where the index represents frequency (`0` to `nums.length`).
  3. Traverse the buckets from right to left (highest frequency to lowest) and collect elements until we reach $k$ numbers.

## Complexity Analysis
- **Time Complexity**: $O(N)$ — Counting elements and scanning through the bucket array both take linear time relative to input length.
- **Space Complexity**: $O(N)$ — Storing frequency map entries and bucket lists bounds memory to linear auxiliary space.