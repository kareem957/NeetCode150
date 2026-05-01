class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;


        for(let i=0;i<rows;i++){
            for(let j=0;j<i;j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols/2;j++) {
                [matrix[i][j], matrix[i][cols-j-1]] = [matrix[i][cols-j-1], matrix[i][j]];
            }
        }

        return matrix;
    }
}


const solution = new Solution();
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(solution.rotate(matrix));