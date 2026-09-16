/**
 * Problem: LeetCode 217 - Contains Duplicate
 * Approach: Hash Set Early-Exit
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}

module.exports = containsDuplicate;