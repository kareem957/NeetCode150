class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, maxLen = 0;
        const seen = new Set();

        for(let right = 0;right<s.length;right++){
            while(seen.has(s[right])) {
                seen.delete(s[left]);
                left += 1;
            }
            seen.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}


const solution = new Solution();
console.log(solution.lengthOfLongestSubstring("abcabcbb"));