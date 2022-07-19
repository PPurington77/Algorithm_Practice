// * 
//   Array: Binary Search (non recursive)
//   Given a sorted array and a value, return whether the array contains that value.
//   Do not sequentially iterate the array. Instead, ‘divide and conquer’,
//   taking advantage of the fact that the array is sorted .
//   Bonus (alumni interview): 
//     first complete it without the bonus, because they ask for additions
//     after the initial algo is complete
//     return how many times the given number occurs
// */

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;
//create function
//split the array in half
//get length of the array..if decimal math.floor()...divide the array by 2
//2 conditions...if searched num is less than the middle iterate forward and stop at middle. if greater than iterate from right to left and stop at middle.


// function binarySearch(sortedNums, searchNum) {
//     let middle = Math.floor(sortedNums.length / 2)
//     let count = 0
//     if (searchNum < sortedNums[middle]) {
//         for(let i = 0; i < middle; i++) {
//             if(sortedNums[i] == searchNum) {
//                 return true
//             }
//         }
//     }
//     if (searchNum > sortedNums[middle]) {
//         for(let j = sortedNums.length - 1; j > middle; j--) {
//             if(sortedNums[j] == searchNum) {
//                 return true
//             }
//         }
//     }
//     return false
// }

//function creation
//start variable
//end variable
//middle variable
//while middle != searchNum
//conditional for where searchNum is
//if searchNum is less than middle reassign end as middle
//if searchNum is greater than middle reassign start as middle
function binarySearch(sortedNums, searchNum) {
    let start = sortedNums[0];
    let end = sortedNums[sortedNums.length - 1];
    let middle = Math.floor(sortedNums.length / 2)
    while (searchNum != middle) {
        if (searchNum < sortedNums[middle]) {
            end = middle
            middle = Math.floor(end / 2)
            if (searchNum == middle) {
                return true
            }
        }
        if (searchNum > sortedNums[middle]) {
            start = middle
            middle = Math.floor(end / 2)
            if (searchNum == middle) {
                return true
            }
        }
        else {
            return false
        }
    }
}

console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)

//////////////////////////////////////////////////////an answer below

* pseudocode:
* - sort input array
    * - initialize two variables, start and end
        * - start would be the first index
            * - end would be last index in array
                * - put everything in a while loop with condition start <= end
                    * - initialize mid value to be math.floor(avg of start and end)
                        * - check if mid is expected value( return true if true)
* - if not check if value at mid is less or greater than expected value
    * - if greater start = mid + 1
        * - if less end = mid - 1
            * - return false at end of method
                * /
function binarySearch(sortedNums, searchNum) {
    sortedNums = sortedNums.sort();
    let start = 0;
    let end = sortedNums.length - 1;
    while (start <= end) {
        if (sortedNums[end] == searchNum || sortedNums[start] == searchNum) {
            countNums(sortedNums, searchNum);
            return true;
        }
        let mid = Math.floor((start + end) / 2);
        if (sortedNums[mid] == searchNum) {
            countNums(sortedNums, searchNum);
            return true;
        } else if (searchNum > sortedNums[mid]) {
            start = mid + 1;
        } else if (searchNum < sortedNums[mid]) {
            end = mid - 1;
        }
        // console.log(start);
        // console.log(end);
    }
    return false;
}

function countNums(sortedNums, searchNum) {
    let count = 0
    for (var i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] == searchNum) {
            count++;
        }
    }
    console.log(count);
    return count;
}