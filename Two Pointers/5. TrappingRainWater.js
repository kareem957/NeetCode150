class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0,
            right = height.length - 1;
        let maxLeft = 0,
            maxRight = 0,
            water = 0;

        while (left < right) {
            if (height[left] <= height[right]) {
                if (maxLeft > height[left]) water += maxLeft - height[left];
                else maxLeft = height[left];
                left += 1;
            } else {
                if (maxRight > height[right]) water += maxRight - height[right];
                else maxRight = height[right];

                right -= 1;
            }
        }

        return water;
    }
}

const solution = new Solution();
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = solution.trap(height);
console.log(result);
