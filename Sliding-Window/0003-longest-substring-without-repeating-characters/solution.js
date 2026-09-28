/**
 * Problem: LeetCode 3 - Longest Substring Without Repeating Characters
 * Approach: Sliding Window with Hash Set
 * Time Complexity: O(N)
 * Space Complexity: O(min(N, M))
 */
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Thu hẹp cửa sổ từ bên trái nếu phát hiện ký tự trùng lặp
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;