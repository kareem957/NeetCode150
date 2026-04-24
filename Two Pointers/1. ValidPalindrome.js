class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedStr = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let left = 0;
        let right = cleanedStr.length - 1;

        while(left<right) {
            if(cleanedStr[left] !== cleanedStr[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}


const solution = new Solution();
const s = "A man, a plan, a canal: Panama";
console.log(solution.isPalindrome(s));

const s2 = "race a car";
console.log(solution.isPalindrome(s2));

const s3 = "madam";
console.log(solution.isPalindrome(s3));