/**
 * Problem: LeetCode 167 - Two Sum II - Input Array Is Sorted
 * Approach: Two Pointers
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed array
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

module.exports = twoSum;