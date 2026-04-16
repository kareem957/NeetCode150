class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = {};

        for(const str of strs) {
            const sortedStr = str.split('').sort((a, b) => a.localeCompare(b)).join('');
            if(!(sortedStr in freqMap)) {
                freqMap[sortedStr] = [];
            }
            freqMap[sortedStr].push(str);
        }

        return Object.values(freqMap);
    }
}

const solution = new Solution();
console.log(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]));