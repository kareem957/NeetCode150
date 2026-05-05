class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos,i) => [pos, (target-pos)/speed[i]]).sort((a,b) => b[0] - a[0]);
        const stack = [];

        for(const [_pos,time] of cars) {
            stack.push(time);

            if(stack.length>=2 && stack.at(-1) <= stack.at(-2)){
                stack.pop();
            }
        }

        return stack.length;
    }
}


const solution = new Solution();
const target = 12;
const position = [10,8,0,5,3];
const speed = [2,4,1,1,3];
const result = solution.carFleet(target, position, speed);
console.log(result);


const target2 = 10;
const position2 = [4,1,0,7];
const speed2 = [2,2,1,1];
const result2 = solution.carFleet(target2, position2, speed2);
console.log(result2);