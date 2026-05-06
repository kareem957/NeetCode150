function largestRectangleArea(heights) {
    const stack = [];   // stores [index, height]
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        // pop all bars taller than current
        while (stack.length && heights[i] < stack.at(-1)[1]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;   // current bar can extend back to here
        }

        stack.push([start, heights[i]]);
    }

    // remaining bars extend all the way to the right end
    for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
}



const heights = [3,3,3,3];
const result = largestRectangleArea(heights);
console.log(result);