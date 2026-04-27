class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const N = heights.length;
        let left = 0, right = N - 1;
        let maxWater = 0;

        while(left < right) {
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            const area = width * height;

            maxWater = Math.max(maxWater, area);

            if(heights[left] < heights[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return maxWater;
    }
}


const solution = new Solution();
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = solution.maxArea(heights);
console.log(result);