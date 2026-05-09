class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // always binary search on smaller array
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length;
        const n = nums2.length;
        const half = Math.floor((m + n) / 2);

        let low = 0,
            high = m;

        while (low <= high) {
            const cut1 = (low + high) >>> 1; // cut in nums1
            const cut2 = half - cut1; // cut in nums2 (automatic)

            // 4 boundary values
            const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
            const right1 = cut1 === m ? Infinity : nums1[cut1];
            const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
            const right2 = cut2 === n ? Infinity : nums2[cut2];

            if (left1 <= right2 && left2 <= right1) {
                // ✅ valid cut → calculate median
                if ((m + n) % 2 === 1) {
                    return Math.min(right1, right2); // odd total
                } else {
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2; // even total
                }
            } else if (left1 > right2) {
                high = cut1 - 1; // cut1 too far right
            } else {
                low = cut1 + 1; // cut1 too far left
            }
        }
    }
}



const solution = new Solution();
const nums1 = [1, 3];
const nums2 = [2];
const result = solution.findMedianSortedArrays(nums1, nums2);
console.log(result);


const solution2 = new Solution();
const nums3 = [1, 2];
const nums4 = [3, 4];
const result2 = solution2.findMedianSortedArrays(nums3, nums4);
console.log(result2);