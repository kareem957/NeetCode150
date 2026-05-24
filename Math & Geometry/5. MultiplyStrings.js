class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if(num1 === "0" || num2 === "0") return "0";
        const m = num1.length, n = num2.length;

        const result = new Array(m+n).fill(0);

        for(let i=m-1;i>=0;i--) {
            for(let j=n-1;j>=0;j--) {
                const multiply = (num1[i] - '0') * (num2[j] - '0');

                const p1 = i + j;
                const p2 = i + j + 1;

                const total = multiply + result[p2];

                result[p2] = total%10;
                result[p1] += Math.floor(total/10);
            }
        }

        return result.join('').replace(/^0+/, '') || '0';
    }
}


const solution = new Solution();
const res = solution.multiply("123", "456");
console.log(res);