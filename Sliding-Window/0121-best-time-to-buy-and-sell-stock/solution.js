/**
 * Problem: LeetCode 121 - Best Time to Buy and Sell Stock
 * Approach: One-Pass Tracking Min Price (Sliding Window)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
}

module.exports = maxProfit;