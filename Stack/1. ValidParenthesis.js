class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const matchingBrackets = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for(const ch of s.split("")) {
            if(['(', '[', '{'].includes(ch)) stack.push(ch);
            else {
                if(stack.length === 0) return false;
                if(stack.pop() !== matchingBrackets[ch]) return false;
            }
        }
        return stack.length === 0;
    }

    isValid2(s) {
        const stack = [];
        for(const ch of s.split("")) {
            if(['(', '[', '{'].includes(ch)) stack.push(ch);
            else {
                if(stack.length === 0) return false;
                const top = stack.pop();
                if(ch === ')' && top !== '(') return false;
                if(ch === ']' && top !== '[') return false;
                if(ch === '}' && top !== '{') return false;
            }
        }
        return stack.length === 0;
    }
}

const solution = new Solution();
const s = "()";
console.log(solution.isValid(s));

const s2 = "()[]{}";
console.log(solution.isValid2(s2));

const s3 = "(]";
console.log(solution.isValid2(s3));

const s4 = "([)]";
console.log(solution.isValid2(s4));

const s5 = "{[]}";
console.log(solution.isValid2(s5));