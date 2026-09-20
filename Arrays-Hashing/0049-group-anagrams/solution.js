/**
 * Problem: LeetCode 49 - Group Anagrams
 * Approach: Categorize by Sorted String (Hash Map)
 * Time Complexity: O(N * K log K) - với N là số chuỗi, K là độ dài chuỗi lớn nhất
 * Space Complexity: O(N * K) - lưu trữ toàn bộ các chuỗi trong Hash Map
 */
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Tạo key chuẩn bằng cách sắp xếp lại các ký tự trong từ
        const sortedKey = str.split('').sort().join('');

        if (!map.has(sortedKey)) {
            map.set(sortedKey, []);
        }

        map.get(sortedKey).push(str);
    }

    // Trả về danh sách tất cả các nhóm
    return Array.from(map.values());
}

module.exports = groupAnagrams;