class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram1(s, t) {
        if(s.length !== t.length) return false;
        
        const sHash = {};
        const tHash = {};

        for(const char of s) {
            sHash[char] = (sHash[char] || 0) + 1;
        }

        for(const char of t) {
            tHash[char] = (tHash[char] || 0) + 1;
        }

        for(const [key, value] of Object.entries(sHash)) {
            if(tHash[key] != value) return false;
        }
        return true;
    }

    // time complexity: O(n)
    // space complexity: O(n)

    isAnagram(s,t) {
        const count = {};


        for(const char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for(const char of t) {
            if(!count[char]) return false;
            count[char]--;
        }
        
        return Object.values(count).every(value => value === 0);
    }
}


const solution = new Solution();
console.log(solution.isAnagram("jar", "raj")); // should return false


// time complexity: O(n)
// space complexity: O(1)