/* 
String: Reverse
Given a string,
return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 * 
 * pseudo code
 * - create a function that takes in a string
 * - create a newString variable
 * - loop through the given string
 *      - add each letter to a newString variable
 * - return newString
 */
function reverseString(str) {
    var newString = "";
    for ( var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    
    return newString;
}

// console.log(reverseString(str3))

// **************************************************************************

/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

// To Do:
//create function
//split string into array
//create new variable
//loop through array

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
// function acronymize(str) {
//     var arr = str.split(" ");
//     var string = "";
//     for ( var i = 0; i < arr.length; i++) {
//         string += arr[i].charAt(0)
//     }
//     return string.toUpperCase()
// }

// console.log(acronymize(two_str4))

function acronymize(str) {
    var string = "";
    string = string + str[0];
    for( var i = 0; i < str.length; i++) {
        if (str[i] == ' ' && str[i +1] != ' ') {
            string = string + str[i +1]
        }
    }
    return string.toUpperCase()
}
console.log(acronymize(two_str1))