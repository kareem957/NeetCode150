class Solution {

    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxLen = 0;

        for(let num of nums) {
            if(!numSet.has(num-1)) {
                let currentNum = num;
                let currentLen = 1;

                while(numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }

                maxLen = Math.max(maxLen, currentLen);
            }
        }
        return maxLen;
    }
}

const solution = new Solution();
const nums = [100,4,200,1,3,2];
console.log(solution.longestConsecutive(nums));