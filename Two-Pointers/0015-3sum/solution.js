/**
 * Problem: LeetCode 15 - 3Sum
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(N^2)
 * Space Complexity: O(1) hoặc O(N) tùy thuộc vào thư viện sort
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Mảng đã sort, nếu số đầu tiên > 0 thì tổng 3 số luôn > 0
        if (nums[i] > 0) break;

        // Tránh trùng lặp phần tử đầu tiên
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Bỏ qua các giá trị trùng lặp ở 2 con trỏ
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

module.exports = threeSum;