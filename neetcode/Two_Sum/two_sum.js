/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
    let indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (indexMap.has(difference)) {
            result[0] = i;
            result[1] = indexMap.get(difference);
            break;
        }
        else {
            indexMap.set(nums[i], i)
        }
    }
    return result
};