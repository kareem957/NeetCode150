/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root) {
            if(!root) return 0;

            const left = dfs(root.left);
            if(left == -1) return -1;

            const right = dfs(root.right);
            if(right == -1) return -1;

            if(Math.abs(left - right) > 1) return -1;
            return Math.max(left, right) + 1;
        }

        return dfs(root) !== -1;
    }
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const solution = new Solution();
console.log(solution.isBalanced(root));