class Solution {
    isPossible(piles, h, speed) {
        let time = 0;
        for (const pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time <= h;
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    minEatingSpeed(piles, h) {
        let low = 1,
            high = Math.max(...piles);
        while (low < high) {
            let mid = (low + high) >>> 1;
            if (this.isPossible(piles, h, mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}

const solution = new Solution();
const piles1 = [1, 4, 3, 2];
const h1 = 9;
console.log(solution.minEatingSpeed(piles1, h1));

const piles2 = [25, 10, 23, 4];
const h2 = 4;
console.log(solution.minEatingSpeed(piles2, h2));
