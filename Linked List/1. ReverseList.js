class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null, cur = head;

        while(cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }


        return prev;
        
    }
}


const solution = new Solution();
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const result = solution.reverseList(head);
console.log(result);