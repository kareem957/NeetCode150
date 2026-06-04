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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;

        // const queue = [root];

        // while(queue.length) {
        //     const node = queue.shift();

        //     [node.left, node.right] = [node.right, node.left];

        //     if(node.left) queue.push(node.left);
        //     if(node.right) queue.push(node.right);
        // }


        [root.left, root.right] = [root.right, root.left];
        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}


const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

const solution = new Solution();
console.log(solution.invertTree(root));