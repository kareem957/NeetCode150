class Solution {
    reverse(n) {
        let isNegative = n < 0;
        n = Math.abs(n);
        let res = 0;

        while (n) {
            let digit = n % 10;
            res = res * 10 + digit;
            n = Math.floor(n / 10);
        }

        // 32-bit integer range check
        if (res > 2 ** 31 - 1) return 0;

        return isNegative ? -res : res;
    }
}

const solution = new Solution();
console.log(solution.reverse(123));
console.log(solution.reverse(-123));
console.log(solution.reverse(1234236467));
