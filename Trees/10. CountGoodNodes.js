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
     * @return {number}
     */
    goodNodes(root) {

        function dfs(root, maxSoFar) {
            if(!root) return 0;

            const isGood = root.val >= maxSoFar ? 1 : 0;
            const newMax = Math.max(maxSoFar, root.val);


            return isGood + dfs(root.left, newMax) + dfs(root.right, newMax);
        }

        return dfs(root, -Infinity);
    }
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

const solution = new Solution();
console.log(solution.goodNodes(root));
    