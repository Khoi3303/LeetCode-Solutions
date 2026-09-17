/**
 * Problem: LeetCode 242 - Valid Anagram
 * Approach: Frequency Counter (Hash Map / Array Bucket)
 * Time Complexity: O(N)
 * Space Complexity: O(1) - Giới hạn tối đa 26 ký tự bảng chữ cái tiếng Anh
 */
function isAnagram(s, t) {
    // Nếu độ dài khác nhau thì không thể là anagram
    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);
    const charCodeA = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - charCodeA]++;
        count[t.charCodeAt(i) - charCodeA]--;
    }

    // Nếu là anagram, tất cả các vị trí trong mảng đếm phải bằng 0
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;