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
     * @return {void}
     */
    reorderList(head) {
        // Step 1: find middle
        let slow = head,
            fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: reverse second half  ✅ missing in your code
        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }
        second = prev; // reversed second half

        // Step 3: merge alternately  ✅ correct interleave
        let first = head;
        while (second) {
            let next1 = first.next; // save both nexts
            let next2 = second.next;
            first.next = second; // 1 → 5
            second.next = next1; // 5 → 2
            first = next1; // move first forward
            second = next2; // move second forward
        }
    }
}

const solution = new Solution();
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
solution.reorderList(head);
console.log(head);