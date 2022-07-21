/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };
// create function
//create variable containing empty dictionary


function fewestCoinChange(cents) {
    let outcome = {}
    let temp 
    if (Math.floor(cents / 25) != 0) {
        temp = Math.floor(cents / 25)
        outcome['quarter'] = temp
        cents = cents - (25 * temp)
    }
    if (Math.floor(cents / 10) != 0) {
        temp = Math.floor(cents / 10)
        outcome['dime'] = temp
        cents = cents - (10 * temp)
    }
    if (Math.floor(cents / 5) != 0) {
        temp = Math.floor(cents / 5)
        outcome['nickel'] = temp
        cents = cents - (5 * temp)
        // console.log(cents)
    }
    if (Math.floor(cents / 1) != 0) {
        temp = Math.floor(cents / 1)
        outcome['penny'] = temp
        // cents = cents - temp
    }
    // outcome['penny'] = 4
    return outcome
}


// console.log(fewestCoinChange(cents1)) // { quarter: 1 }
// console.log(fewestCoinChange(cents2)) // { quarter: 2 }
// console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
// console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const numsA = [3, 0, 1];
const expectedA = 2;

const numsB = [3, 0, 1, 2];
const expectedB = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const numsC = [2, -4, 0, -3, -2, 1];
const expectedC = -1;

const numsD = [5, 2, 7, 8, 4, 9, 3];
const expectedD = 6;
//create function
//order array
//
function missingValue(unorderedNums) {
    let newArray = unorderedNums.sort((a,b)=>a-b)
    let expected = null
    for (let i = 0; i < newArray.length - 1; i++) {
        if(newArray[i] + 1 != newArray[i + 1]) {
            expected = newArray[i] + 1
            return expected
        }
        else if(newArray[i] + 1 == newArray[i + 1]) {
            continue
        }
    }
}

// console.log(missingValue(numsA)); // 2
// console.log(missingValue(numsB)); // null
// console.log(missingValue(numsC)); // -1
// console.log(missingValue(numsD)); // 6