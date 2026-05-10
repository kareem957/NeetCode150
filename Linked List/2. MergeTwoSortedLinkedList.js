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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(); // placeholder start
        let cur = dummy; // cur builds the list

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                cur.next = list1; // ✅ point to existing node
                list1 = list1.next;
            } else {
                cur.next = list2; // ✅ point to existing node
                list2 = list2.next;
            }
            cur = cur.next; // move cur forward
        }

        // attach remaining nodes directly (no loop needed)
        cur.next = list1 || list2; // ✅ one line handles both

        return dummy.next; // ✅ skip the empty dummy node
    }
}

const solution = new Solution();
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const result = solution.mergeTwoLists(list1, list2);
console.log(result);



