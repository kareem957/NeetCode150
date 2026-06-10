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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(p.val < root.val && q.val < root.val) return this.lowestCommonAncestor(root.left, p , q);
        else if(p.val > root.val && q.val > root.val) return this.lowestCommonAncestor(root.right, p , q);
        return root;
    }
}


const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = root.left;
const q = root.right;

const solution = new Solution();
console.log(solution.lowestCommonAncestor(root, p, q));