const nums = [5,3,4,2,1];

const N = nums.length;
const max = Math.max(...nums);
const min = Math.min(...nums);

function bucketSort(nums, N, max, min) {
    const buckets = Array.from({length: N}, () => []);
    for(const num of nums) {
        const bucketIndex = Math.floor(((num - min) / (max - min + 1)) * N);
        buckets[bucketIndex].push(num);
    }

    for(const bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }


    return buckets.flat();
}


const sortedNums = bucketSort(nums, N, max, min);
console.log(sortedNums);