/**
 * Problem: LeetCode 1 - Two Sum
 * Approach: One-pass Hash Map
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

module.exports = twoSum;