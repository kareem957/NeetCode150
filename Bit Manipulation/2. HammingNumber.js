class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;

        while(n>0) {
            count += 1;
            n = n & (n-1);
        }

        return count;
    }

    hammingWeight2(n) {
        let count = 0;
        for(let i=0;i<32;i++) {
            if(1 & (n>>i)) count++;
        }
        return count;
    }
}

const solution = new Solution();
console.log(solution.hammingWeight(0o10111));
console.log(solution.hammingWeight2(0o10111));