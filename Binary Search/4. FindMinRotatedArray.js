class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0, high = nums.length - 1;

        while(low<high) {
            let mid = (low+high) >>> 1;

            if(nums[mid] > nums[high]) low = mid + 1;
            else high = mid;
        }

        return nums[low];
    }
}

const solution = new Solution();
const nums = [3,4,5,1,2];
console.log(solution.findMin(nums));

const nums2 = [4,5,6,7,0,1,2];
console.log(solution.findMin(nums2));

const nums3 = [11,13,15,17];
console.log(solution.findMin(nums3));