class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = new Set();
        const cols = new Set();

        // Step 1: find all zero positions first
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    rows.add(i);
                    cols.add(j);
                }
            }
        }

        // Step 2: zero out collected rows and cols
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (rows.has(i) || cols.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }

        console.log(matrix);
    }
}


const solution = new Solution();
const matrix =[[0,2,3],[4,0,5],[6,7,8]]
solution.setZeroes(matrix);