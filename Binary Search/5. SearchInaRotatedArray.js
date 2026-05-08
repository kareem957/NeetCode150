class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;

        while (low <= high) {
            let mid = (low + high) >>> 1;

            if (nums[mid] === target) return mid;

            if (nums[low] <= nums[mid]) {
                // left half sorted
                if (nums[low] <= target && target <= nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                // right half sorted
                if (nums[mid] <= target && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }
}

const solution = new Solution();
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const result = solution.search(nums, target);
console.log(result);
