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
    isValidBST(root) {
        function dfs(node, min, max){
            if(!node) return true;

            if(node.val <= min || node.val >= max) return false;

            return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
        }

        return dfs(root, -Infinity, Infinity);
    }
}


const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);

const solution = new Solution();
console.log(solution.isValidBST(root));