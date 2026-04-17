class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        for(const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }
        const sortedFreq = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
        return sortedFreq.slice(0, k).map(item => parseInt(item[0]));
    }
}

const solution = new Solution();
console.log(solution.topKFrequent([1,2,2,3,3,3], 2));