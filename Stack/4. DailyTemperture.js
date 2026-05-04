class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const result = Array.from({length: temps.length}, () => 0);
        const stack = [];

        for(let i=0;i<temps.length;i++) {
            while(stack.length && temps[stack.at(-1)] < temps[i]) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }

            stack.push(i);
        }

        return result;
    }
}



const solution = new Solution();
const temperatures = [73,74,75,71,69,72,76,73];
const result = solution.dailyTemperatures(temperatures);
console.log(result);