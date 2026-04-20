class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftArr = nums.map(()=>1);
        for(let i=1;i<nums.length;i++) {
            leftArr[i] = leftArr[i-1] * nums[i-1];
        }

        let right = 1;
        for(let i=nums.length-1; i>=0;i--) {
            leftArr[i] *= right;
            right *= nums[i];
        }

        return leftArr;
    }
}

const solution = new Solution();
console.log(solution.productExceptSelf([1,2,4,6]));