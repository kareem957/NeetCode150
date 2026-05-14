class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        let node = this.map.get(key);
        this.remove(node);
        this.insertFront(node);
        return node.val;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key));
            this.map.delete(key);            // ✅ fix
        }

        if (this.map.size === this.capacity) {
            let lru = this.tail.prev;
            this.remove(lru);
            this.map.delete(lru.key);
        }

        let newNode = new Node(key, value);
        this.insertFront(newNode);
        this.map.set(key, newNode);
    }
}