class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        let low = 0;
        let high = (m * n) - 1;

        while(low < high) {
            let mid = (low + high) >>> 1;

            let midVal = matrix[Math.floor(mid/n)][mid%n];
            if(midVal == target) return true;
            else if(midVal < target) low = mid + 1;
            else high = mid - 1;
        }
        
        return matrix[Math.floor(low/n)][low%n] == target;
    }
}



const solution = new Solution();
const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 3;
console.log(solution.searchMatrix(matrix, target));