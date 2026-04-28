class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        while(low <= high) {
            let mid = (low + high) >>>1;

            if(nums[mid] == target) return mid;
            else if(nums[mid] < target) low = mid+1;
            else high = mid - 1;
        }
        return -1;
    }
}

const solution = new Solution();
const nums = [1, 2, 3, 4, 5];
const target = 3;
const result = solution.search(nums, target);
console.log(result);
