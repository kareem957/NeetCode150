class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;

        while(true) {
            let groupEnd = prev;
            for(let i=0; i<k; i++) {
                groupEnd = groupEnd.next;
                if(!groupEnd) return dummy.next;
            }

            let groupStart = prev.next;
            let nextGroup = groupEnd.next;
            let curr = groupStart, p = nextGroup;

            while(curr !== nextGroup) {
                let next = curr.next;
                curr.next = p;
                p = curr;
                curr = next;
            }

            prev.next = groupEnd;
            groupStart.next = nextGroup;
            prev = groupStart;
        }
    }
}
