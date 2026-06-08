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
    diameterOfBinaryTree(root) {
        let diameter = 0;


        function getMaxHeight(root) {
            if(!root) return 0;

            const leftHeight = getMaxHeight(root.left);
            const rightHeight = getMaxHeight(root.right);

            diameter = Math.max(diameter, leftHeight + rightHeight);

            return Math.max(leftHeight, rightHeight) + 1;
        }

        getMaxHeight(root);
        return diameter;
    }
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const solution = new Solution();
console.log(solution.diameterOfBinaryTree(root));