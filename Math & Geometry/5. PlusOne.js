class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;          // ✅ no carry, just increment and return
                return digits;
            }
            digits[i] = 0;            // ✅ carry — set to 0, loop continues
        }
        return [1, ...digits];        // ✅ all 9s case → [9,9,9] → [1,0,0,0]
    }
}


const solution = new Solution();
const digits = [1, 2, 3, 4];
const result = solution.plusOne(digits);
console.log(result);