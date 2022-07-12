//given an array of integers and a number target, return indices of the two numbers that add up to the target
//create function
//create new variable
//loop through the given array
//add indexes of the array to determine if they equal the target number
//if they equal the target number push the index number into athe new variable
//return the new variable


function twoSum(nums, target) {
    let result = [];
    let indexMap = new Map();
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i];
        if(indexMap.has(difference)) {
            result[0] = i;
            result[1] = indexMap.get(difference);
            break;
        }
        else {
            indexMap.set(nums[i], i)
        }
    }
    return result
}

var two_sum = twoSum([5, 10, 20, 25, 1, 3, 2], 7);
console.log(two_sum);