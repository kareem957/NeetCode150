class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const deque = [];

        for(let right = 0;right<nums.length;right++) {
            while(deque.length && nums[deque.at(-1)] <= nums[right]) {
                deque.pop();
            }
            deque.push(right);

            if(deque[0] < right - k + 1) {
                deque.shift();
            }

            if(right >= k-1) res.push(nums[deque[0]]);
        }



        return res;
    }
}


const solution = new Solution();
const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
const result = solution.maxSlidingWindow(nums, k);
console.log(result);