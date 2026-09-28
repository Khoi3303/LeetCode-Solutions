/**
 * Problem: LeetCode 11 - Container With Most Water
 * Approach: Two Pointers (Greedy Shrinking Window)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentWater = width * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

module.exports = maxArea;