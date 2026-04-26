class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const set = new Set();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let k = -(nums[i] + nums[j]);
                if (k === -0) k = 0;
                if (set.has(k)) {
                    const triplet = [nums[i], nums[j], k].sort((a, b) => a - b);
                    result.push(JSON.stringify(triplet));
                }
                set.add(nums[j]);
            }
            set.clear();
        }
        return [...new Set(result)].map((e) => JSON.parse(e));
    }

    threeSum2(nums) {
        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // skip duplicate i
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);

                    // skip duplicates for left
                    while (left < right && nums[left] === nums[left + 1]) left++;

                    // skip duplicates for right
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}

const solution = new Solution();
const nums = [-1, 0, 1, 2, -1, -4];
console.log(solution.threeSum(nums));
console.log(solution.threeSum2(nums));
