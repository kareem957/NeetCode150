// const nums = [5,3,4,2,1];

// const N = nums.length;
// const max = Math.max(...nums);
// const min = Math.min(...nums);

// function bucketSort(nums, N, max, min) {
//     const buckets = Array.from({length: N}, () => []);
//     for(const num of nums) {
//         const bucketIndex = Math.floor(((num - min) / (max - min + 1)) * N);
//         buckets[bucketIndex].push(num);
//     }

//     for(const bucket of buckets) {
//         bucket.sort((a, b) => a - b);
//     }


//     return buckets.flat();
// }


// const sortedNums = bucketSort(nums, N, max, min);
// console.log(sortedNums);


// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function(s) {
//     let N = s.length;
//     let left = 0, right = N - 1;

//     while(left<right) {
//         [s[left], s[right]] = [s[right], s[left]];
//         left += 1;
//         right -= 1;
//     }
//     return s;
// };


// const res = reverseString(["h","e","l","l","o"]);
// console.log(res);



// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     s = s.replaceAll(/[^a-bA-B0-9]/g,"").toLowerCase();

//     const N = s.length
//     let left = 0, right = N - 1;

//     while(left<right) {
//         if(s[left] !== s[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// };

// const res = isPalindrome("A man, a plan, a canal: Panama");
// const res2 = isPalindrome("race a car");
// console.log(res2);
// const res3 = isPalindrome("madam");
// console.log(res, res2, res3);


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     const sanitizedStr = s.split('').filter(char => isAlphanumeric(char) ? char : '' ).join('').toLowerCase()

//     if (sanitizedStr.length === 0) return true

//     let left = 0
//     let right = sanitizedStr.length - 1
    
//     while (left < right) {
//         if (sanitizedStr[left] !== sanitizedStr[right]) return false
//         left++
//         right--
//     }
//     return true

// };

// function isAlphanumeric(char) {
//     const alphaNumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
//     return alphaNumeric.includes(char)
// }

// const res = isPalindrome("A man, a plan, a canal: Panama");
// console.log(res);


var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length - 1;
    
    while(left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            const rightVal = nums[right];
            nums[pos] = nums[left] * nums[left];
            nums[left] = rightVal;
            left += 1;
        } else {
            const leftVal = nums[left];
            nums[pos] = nums[right] * nums[right];
            nums[left] = leftVal;
            right -= 1;
        }
        
        pos -= 1;
    }
    
    console.log(nums);
};



console.log(sortedSquares([-4,-1,0,3,10]))