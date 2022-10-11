//Given array of ints, return an array such that answer i is equal to the product of all of the elements of nums except nums
//No division allowed
//my answer
let input1 = [1,2,3,4];
//expected return = [24,12,8,6];
let input2 = [-1, 1, 0, -3, 3];

function productExceptSelf(nums) {
    let answerArr = [];

    for(let i = 0; i < nums.length; i++) {
        let tempI = nums[i];
        let multiples = 1;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] === tempI) continue;
            else(multiples = multiples * nums[j]);
        }
        answerArr.push(multiples);
        multiples = 1;
    }
    return answerArr;
}

console.log(productExceptSelf(input2));
