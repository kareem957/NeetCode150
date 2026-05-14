class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0, fast = 0;

        while(true) {
            slow = nums[slow];  
            fast = nums[nums[fast]];
            if(slow == fast) break;
        }

        slow = 0;
        while(true) {
            if(slow == fast) return slow;
            slow = nums[slow];
            fast = nums[fast];
        }
    }
}


const solution = new Solution();
const nums = [1,3,4,2,2];
const result = solution.findDuplicate(nums);
console.log(result);