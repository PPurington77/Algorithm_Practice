/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 1, 5, 4];
const expected6 = [];
//  - order doesn't matter
//create function
//create empty dictionary
//loop through array
//if i is not in dictionary then add it in w/ a value of 1
//if i is in the dictionary then add to the value of the key by 1
//look through the dictionary and whatever is the highest number

function mode(nums) {
    let dict = {};
    let outcome = [];
    let first = nums[0];
    if (nums == []) return outcome;
    

    for (let i = 0; i < nums.length; i++) {
        if (dict == {}) {
            dict['i'] = 1
        }
        if ("i" in outcome) {
            console.log('its in the dict');
        }
    }
    return outcome;
}

// console.log(mode(nums2));

//answer below_________________________________________________________

function mode(nums) {
    let obj = {}
    let max = 0
    let output = []
    for(var i = 0; i<nums.length; i++){
        if(!obj[nums[i]]) obj[nums[i]] = 1
        else obj[nums[i]]++
    }
    for(let key in obj) if(obj[key] > max) max = obj[key]
    for(let key in obj) if(obj[key] == max) output.push(key)
    if(output.length == Object.keys(obj).length) return []
    return output
}