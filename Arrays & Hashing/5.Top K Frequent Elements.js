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

    topKFrequent2WithBucketSort(nums, k) {
        const freqMap = {};

        for(const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        } 

        const buckets = Array.from({length: nums.length + 1}, () => []);

        for(const num in freqMap) {
            const freqVal = freqMap[num];
            buckets[freqVal].push(Number(num));
        }

        let result = [];
        for(let i=nums.length;i>=0 && result.length<k;i--) {
            if(buckets[i].length>0) {
                result.push(...buckets[i]);
            }
        }
        return result.slice(0,k);
    }
}

const solution = new Solution();
console.log(solution.topKFrequent([1,2,2,3,3,3], 2));
console.log(solution.topKFrequent2WithBucketSort([1,2,2,3,3,3], 2));
console.log(solution.topKFrequent2WithBucketSort([-1,-1], 1));
console.log(solution.topKFrequent2WithBucketSort([7,7], 1));