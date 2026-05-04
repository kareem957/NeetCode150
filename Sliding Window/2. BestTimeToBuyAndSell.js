class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity,
            maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                maxProfit = Math.max(maxProfit, prices[i] - minPrice);
            }
        }

        return maxProfit;
    }
}



const solution = new Solution();
const prices = [7,1,5,3,6,4];
const result = solution.maxProfit(prices);
console.log(result);

const prices2 = [10,1,5,6,7,1]
const result2 = solution.maxProfit(prices2);
console.log(result2);