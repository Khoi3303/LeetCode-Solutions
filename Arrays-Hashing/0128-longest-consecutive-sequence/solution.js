/**
 * Problem: LeetCode 128 - Longest Consecutive Sequence
 * Approach: Hash Set Sequence Exploration
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        // Chỉ bắt đầu kiểm tra nếu 'num' là phần tử mở đầu của một chuỗi
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

module.exports = longestConsecutive;