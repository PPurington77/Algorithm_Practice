// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

//Create function
//Sort input array
//loop through array
//push nums to array that are consequetive w/ each other
//return answer array

let nums = [100, 4, 200, 1, 3, 2];
let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

function conseqNums(arr) {
    let answerArr = [];
    let sortedArr = arr.sort(function(a,b) {return a-b});
    for(let i = 0; i < sortedArr.length; i++) {
        //push the first number in the argument to the return array
        if(i === 0) {
            answerArr.push(sortedArr[i]);
        }
        //if the next number in the sorted arr - 1 is = to the previous num push it also
        else if(sortedArr[i] - sortedArr[i - 1] === 1) {
            answerArr.push(sortedArr[i]);
        }
    }
    return answerArr.length;
}

console.log(conseqNums(nums));