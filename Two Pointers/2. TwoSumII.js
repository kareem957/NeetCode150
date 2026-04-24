class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;


        while(left<right) {
            const sum = nums[left] + nums[right];
            if(sum == target) return[left+1,right+1];
            if(sum<target) left++;
            else right--;
        }
        return [-1, -1];
    }
}

const solution = new Solution();
const numbers = [2,7,11,15];
const target = 10;
console.log(solution.twoSum(numbers, target));