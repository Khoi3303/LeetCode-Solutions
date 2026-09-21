/**
 * Problem: LeetCode 347 - Top K Frequent Elements
 * Approach: Hash Map Frequency Count + Bucket Sort
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
function topKFrequent(nums, k) {
    const freqMap = new Map();
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    // 1. Đếm tần suất xuất hiện của từng phần tử
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // 2. Gom các phần tử vào bucket dựa trên tần suất (index = frequency)
    for (const [num, count] of freqMap.entries()) {
        buckets[count].push(num);
    }

    // 3. Duyệt ngược từ tần suất cao nhất để lấy k phần tử
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    break;
                }
            }
        }
    }

    return result;
}

module.exports = topKFrequent;