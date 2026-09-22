/**
 * Problem: LeetCode 238 - Product of Array Except Self
 * Approach: Prefix & Suffix Products (Optimal Space)
 * Time Complexity: O(N)
 * Space Complexity: O(1) - Không tính mảng kết quả
 */
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Bước 1: Tính tích dồn của tất cả các phần tử bên trái
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Bước 2: Nhân dồn với tích của tất cả các phần tử bên phải
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

module.exports = productExceptSelf;