//given a string return true if it is a palindrome or false if it is not, if string includes non-alphanumeric chars then remove them

let test1 = 'Racecar!';
let test2 = 'bobert';
let test3 = 'fire!!@erif'

//create function that accepts string as parameter
//remove any non-alphanumeric characters
//make string all lower case
//reverse string
//compare against original string

function validPalindrome(string) {
    let reversed = '';
    let letNumOnly = string.replace(/[^a-z0-9]/gi, '');
    let original = letNumOnly.toLowerCase();

    for(let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }

    return reversed === original;
}

console.log(validPalindrome(test3));