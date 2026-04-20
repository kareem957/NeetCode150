class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let i = 32;
        let res = 0;

        while (i > 0) {
            res <<= 1;

            let lastBit = n & 1;
            res |= lastBit;

            n >>>= 1;

            i--;
        }

        return res >>> 0;
    }
}

const solution = new Solution();
console.log(solution.reverseBits(00000000000000000000000000010101));