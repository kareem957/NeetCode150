class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minStack.length == 0) this.minStack.push(val);
        else {
            const minVal = Math.min(val, this.minStack.at(-1));
            this.minStack.push(minVal);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}


const minStack = new MinStack();

minStack.push(1);
minStack.push(2);
minStack.push(3);

console.log(minStack.getMin()); // 1
console.log(minStack.top());    // 3

minStack.pop();

console.log(minStack.getMin()); // 1
console.log(minStack.top());    // 2
