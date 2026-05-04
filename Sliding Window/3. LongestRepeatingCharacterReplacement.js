class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0, left = 0, maxLen = 0, count = {};

        for(let right = 0;right<s.length;right++) {
            count[s[right]] = (count[s[right]] || 0) + 1;

            maxFreq = Math.max(maxFreq, count[s[right]]);

            while((right - left + 1) - maxFreq > k) {
                count[s[left]]--;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}




const solution = new Solution();
const s = "XYYX";
const k = 2;
const result = solution.characterReplacement(s, k);
console.log(result);


const s2 = "AAABABB";
const k2 = 1;
const result2 = solution.characterReplacement(s2, k2);
console.log(result2);