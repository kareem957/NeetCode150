class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {   
        const need = {}, window = {};
        for(const ch of t) need[ch] = (need[ch] || 0) + 1;

        let left =0, minLen = Infinity, have = 0, required = Object.keys(need).length, result = "";

        for(let right = 0;right<s.length;right++) {
            const rightChar = s[right];
            window[rightChar] = (window[rightChar] || 0) + 1;

            if(need[rightChar] && need[rightChar] === window[rightChar]) have++;

            while(have === required) {
                if((right - left + 1) < minLen) {
                    minLen = right - left + 1;
                    result = s.slice(left, right + 1);
                }

                const leftChar = s[left];
                if(need[leftChar] && window[leftChar] === need[leftChar]) have--;
                window[leftChar]--;
                left++;
            }
        }

        return result;
    }
}



const solution = new Solution();
const s = "ADOBECODEBANC";
const t = "ABC";
const result = solution.minWindow(s, t);
console.log(result);


const s2 = "a";
const t2 = "a";
const result2 = solution.minWindow(s2, t2);
console.log(result2);