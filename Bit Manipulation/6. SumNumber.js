class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b) {
            let xor = a^b;
            b = (a&b) << 1;
            a = xor;
        }
        return a;
    }
}

const solution = new Solution();
console.log(solution.getSum(1, 2));