function getSecondLargest(nums) {
    // Complete the function
    let max = nums[0], max2 = nums[0];
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    for (let num of nums) {
        if (num > max2 && num < max) {
            max2 = num;
        }
    }
    return max2;
}

let nums = [1, 2, 3, 4, 5];
console.log(getSecondLargest(nums));