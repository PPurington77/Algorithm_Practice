//given an array of integers and a number target, return indices of the two numbers that add up to the target

function twoSum(array, target) {
    let nums = []
    for (let i = 0; i < array.length; i++) {
        let temp1 = array[i];
        let temp2 = array[i + 1];
        if( temp1 + temp2 == target) {
            nums.push([i]);
            nums.push([i + 1]);
        }
    }
    return nums 
}

var two_sum = twoSum([3, 2, 4], 6);
console.log(two_sum)