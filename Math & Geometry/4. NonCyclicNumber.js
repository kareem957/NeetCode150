class Solution {
    getSumSquares(n) {
        let sum = 0;

        while(n>0) {
            let num = n%10;
            sum += num * num;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();
        while(n!==1) {
            n = this.getSumSquares(n);
            if(seen.has(n)) return false;
            seen.add(n);
        }
        return true;
    }
}

const solution = new Solution();
console.log(solution.isHappy(19));
console.log(solution.isHappy(2));
console.log(solution.isHappy(3));
console.log(solution.isHappy(4));
console.log(solution.isHappy(5));
console.log(solution.isHappy(6));
console.log(solution.isHappy(7));
console.log(solution.isHappy(8));
console.log(solution.isHappy(9));
console.log(solution.isHappy(10));