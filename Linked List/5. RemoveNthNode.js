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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let slow = dummy, fast = dummy;

        let i=0;
        while(i<=n) {
            fast = fast.next;
            i++;
        }

        while(fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        
        slow.next = slow.next.next


        return dummy.next;
    }
}


const solution = new Solution();
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const result = solution.removeNthFromEnd(head, 2);
console.log(result);