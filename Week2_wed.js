/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
//create a function
//create variable to hold the output
//loop through the string
//push the letter consistant with the amt into the new variable
function rotateStr(str, amnt) {
    let output = ''
    if (amnt > str.length - 1) {
        amnt = amnt % str.length
    }
    for( let i = str.length - 1; i >= 0 ; i--) {
        console.log(str[i]);
    }
}

// rotateStr(str, rotateAmnt2) // possible answer below

// function rotateString(str,num){
//     let newStr= "";
//     if(num<0) num = num *-1
//     let divide = str.length-num;
//     if(divide < 0) divide *= -1
//     for(let j=divide; j<str.length; j++) newStr += str[j];
//     for(let i=0; i<divide; i++ ) newStr += str[i];
//     return  newStr;



//*********************************************************************** */
// Create the function isRotation(str1,str2) that
// returns whether the second string is a rotation of the first.
// */

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

/**
* Determines whether the second string is a rotated version of the first.
* - Time: O(?).
* - Space: O(?).
* @param {string} s1
* @param {string} s2
* @returns {boolean} Whether the second string is a rotated version of the 1st.
*/

//answers below from teach

function isRotation(s1, s2) {
    if (s1.length != s2.length) return false

    return (s2 + s2).includes(s1)
}

function isRotation(s1, s2) {
    if (s1.length != s2.length) return false

    for (let i=0; i < s1.length; i++){
        let output = rotateStr(s1, i+1)
        if (output === s2){
            return true
        }
    }
    return false
}