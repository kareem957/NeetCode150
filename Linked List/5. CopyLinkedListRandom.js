class Node {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;

        let map = new Map();
        let curr = head;

        while(curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while(curr) {
            map.get(curr).next = map.get(curr.next);
            map.get(curr).random = map.get(curr.random);
            curr = curr.next;
        }

        return map.get(head);
    }
}


const solution = new Solution();
const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
const result = solution.copyRandomList(head);
console.log(result);