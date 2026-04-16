class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const freqMap = {};

        for(let i=0;i<nums.length;i++) {
            const diff = target - nums[i];
            if(diff in freqMap) {
                return [freqMap[diff], i]
            }
            freqMap[nums[i]] = i;
        }
        return [-1, -1];
    }
}

const solution = new Solution();
console.log(solution.twoSum([3,5,4,6], 71));
