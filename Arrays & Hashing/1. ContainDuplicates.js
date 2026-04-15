class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        for(const num of nums) {
            hash[num] = hash[num] ? hash[num] + 1 : 1; // optimise this line
            // hash[num] = (hash[num] || 0) + 1; // alternative way to write this line
            if(hash[num]>1) return true;

        }
        return false;
    }
}


const solution = new Solution();
console.log(solution.hasDuplicate([1,2,3,3]));


// time complexity: O(n)
// space complexity: O(n)