// Given in an alumni interview in 2021.
// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears. 


// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.
// */
/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
//  * @param {string} str The string to encode.
//  * @returns {string} The given string encoded.
 */

// create a dictionary
// loop through through the strings
// add a character as a key in the dictionary
//set the value to how many times the character appears in the string
const str1 = "aaaabbcdddaa";
const expected1 = "a4b2c1d3a2";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    let newString = ""
    let counter = 1
    for( let i = 0; i < str.length; i++) {
        // console.log(i)
        if (str[i] == str[i + 1]) {
            counter++;
        }
        else if (str[i] != str[i + 1]) {
            newString = newString + str[i] + counter;
            counter = 1
        }
    }
    if (newString.length >= str.length) {
        return str
    }
    else {
        return newString
    }

}
// console.log(encodeStr(str2))


//   ***************************************************


/* 
String Decode  
*/
/**
* Decodes the given string by duplicating each character by the following int
* amount if there is an int after the character.
* - Time: O(?).
* - Space: O(?).
* @param {string} str An encoded string with characters that may have an int
*    after indicating how many times the character occurs.
* @returns {string} The given str decoded / expanded.
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

function decodeStr(str) {
    let decoded = "";

    let i = 0
    while (i < str.length) {
        let char = str[i++];
        let numStr = "";

        let isNumber = isNaN(parseInt(str[i])) === false;

        while ( i < str.length && isNumber) {
            numStr += str[i++];
            isNumber = isNAN(parseInt(str[i])) === false;
        }
        decoded += myRepeat(char, numStr);

    }
    return decoded;
}

console.log(decodeStr(two_str1))

// function decodeStr(str) {
//     let decoded = ""

//     let i = 0
//     while (i < str.length){
//         let char = str[i++]
//         let numStr = ""

//         let isNumber = isNaN(parseInt(str[i])) === false

//         while ( i < str.length && isNumber){
//             numStr += str[i++]
//             isNumber = isNaN(parseInt(str[i])) === false
//         }
//         decoded += myRepeat(char, numStr)
//         // decoded += char.repeat(numStr)
//     }
//     return decoded
// }