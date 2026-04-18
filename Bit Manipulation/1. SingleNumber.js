class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res;
        for(const num of nums) {
            res ^= num;
        }
        return res;
    }
}

const solution = new Solution();
console.log(solution.singleNumber([2,2,1]));
console.log(solution.singleNumber([4,1,2,1,2]));
console.log(solution.singleNumber([1]));