const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;
// create function
//create counter variable
//create for loop to look through array
//at each index of 0 after the first 1 counter ++
//if counter != 6 at next 1 return false

function socialDistancingEnforcer(queue) {
    let counter = 0;
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] == 1) {
            for (let j = i + 1; j < i + 7; j++) {
                if (queue[j] == 0) {
                    counter ++;
                    console.log(counter)
                }
                else if (counter >= 6) {
                    counter = 0;
                    break;
                }
            }
        }
        else if (counter < 6) {
            return false
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue2)); // our attempt
//an answer below

function socialDistancingEnforcer(queue) {

    var temp = 0
    var start = false
    for (i = 0; i < queue.length; i++) {
        // console.log(queue[i])
        if (queue[i] == 1 || start == true) {

            if (queue[i] == 0) {
                temp += 1
            }
            else if (queue[i] == 1 && start == true) {

                if (temp < 6) {
                    return false
                }

                else if (temp >= 6) {
                    temp = 0
                }
            }
            start = true
        }
    }
    return true
}

// console.log(socialDistancingEnforcer(queue4))

//another answer below

function socialDistancingEnforcer(queue = []) {
    let distance = 0;
    let firstPersonSeen = false;
  
    // Use the existing i value
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === 0) {
        distance += 1;
      } else {
        if (firstPersonSeen && distance < 6) {
          return false;
        }
  
        firstPersonSeen = true;
        distance = 0;
      }
    }
    return true;
  }

//************************************************************************************ */

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

const two_num3 = [10, 2, 5, 5, 5, 1, 1]
const two_expected3 = 2;

const two_num4 = [10, 2, 5, 5, 5, 1, 1, 3]
const two_expected4 = -1;
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {}