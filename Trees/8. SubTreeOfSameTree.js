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

    isSameTree(p,q) {
        if(!p || !q) return p == q;
        if(p.val != q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false;

        if(this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}


const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);

const subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);

const solution = new Solution();
console.log(solution.isSubtree(root, subRoot)); 