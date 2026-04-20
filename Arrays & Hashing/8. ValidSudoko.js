class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const squares = {};
        const N = board.length;

        for(let row=0;row<N;row++) {
            rows[row] = new Set();
            cols[row] = new Set();
            squares[row] = new Set();
        }

        for(let row=0;row<N;row++) {
            for(let col=0;col<N;col++) {
                const num = board[row][col];
                if(num === '.') continue;

                const squareIndex = Math.floor(row/3) * 3 + Math.floor(col/3);

                if(rows[row].has(num) || cols[col].has(num) || squares[squareIndex].has(num)) return false;

                rows[row].add(num);
                cols[col].add(num);
                squares[squareIndex].add(num);
            }   
        }
        return true;
    }
}



const solution = new Solution();
const board  = [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(solution.isValidSudoku(board));