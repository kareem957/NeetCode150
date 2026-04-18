class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [0];

        for(let i=1;i<=n;i++) {
            res.push(res[i>>1] + (i&1));   
        }

        return res;
    }
}


const solution = new Solution();
console.log(solution.countBits(20));