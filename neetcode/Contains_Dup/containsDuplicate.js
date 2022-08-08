let nums = [1,2,3,4,3];

function containsDuplicate(nums) {
    let numbers = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(numbers.has(nums[i])) {
            return true
        }
        else {
            numbers.add(nums[i])
            console.log(numbers);
        }
    }
    return false;
};

console.log(containsDuplicate(nums));