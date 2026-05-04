class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let need = {},
            window = {};
        for (const ch of s1) need[ch] = (need[ch] || 0) + 1;

        let left = 0,
            matches = 0;
        const required = Object.keys(need).length;

        for (let right = 0; right < s2.length; right++) {
            const ch = s2[right];
            window[ch] = (window[ch] || 0) + 1;

            if (need[ch] && need[ch] === window[ch]) matches += 1;

            if (right - left + 1 > s1.length) {
                const leftChar = s2[left];
                if (need[leftChar] && window[leftChar] === need[leftChar]) matches -= 1;
                window[leftChar] -= 1;
                left += 1;
            }

            if (matches === required) return true;
        }

        return false;
    }
}

const solution = new Solution();
const s1 = "ab";
const s2 = "eidboaoo";
const result = solution.checkInclusion(s1, s2);
console.log(result);
