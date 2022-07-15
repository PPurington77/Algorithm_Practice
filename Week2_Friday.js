const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello     world     ";
const expected2 = "hello     world";

//create function
//create variable to hold letters
//loop through the string
//push letters into the new variable
//return new variable

function trim(str) {
    let isTrimming = false
    let newWord = ''
    let secWord = ''
    let final = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            isTrimming = true
        }
        if(isTrimming) {
            newWord += str[i]
        }
    }
    console.log(newWord);
    for(let j = newWord.length - 1; j >= 0; j--) {
        secWord += newWord[j]
    }
    console.log(secWord)
    isTrimming = false
    for(let g = secWord.length -1; g >= 0; g--) {
        if(secWord[g] !== ' ') {
            isTrimming = true
        }
        if(isTrimming) {
            final += secWord[g]
        }
    }
    console.log(final)
    console.log(final.length)
}

// console.log(trim(str2))
//poss answer below from class ********************************
function trim(str) {
    var start = -1
    var finish = -1
    var newStr = ""
    for(var i = 0; i < str.length; i++){
        if(str[i] != " " && start == -1){
            start = i
        }
        if(str[i] != " " && start != -1){
            finish = i
        }
    }
    console.log(start, finish)
    for(var j = start;j<=finish;j++){
        newStr += str[j]
    }
    return newStr
}

// console.log(trim(str2))
//or ***************************************************
function trim(str) {

    //const list = str.split("");
    const list = str;
    console.log(str[5]);
    for (var i = 0; i < list.length; i++){
        if (list[i] != " "){
            var first = i;
            break;
        }
    }
    for (var j = list.length - 1; j > -1; j--){
        if (list[j] != " "){
            var last = j;
            break;
        }
    }

    const newString = str.slice(first, last+1);

    console.log(first)
    console.log(last)

    return newString;

}

//algo #2 answer below from class
// * pseudocode:
//  * - trim to make sure all spaces are gone, if input has any spaces
//  * - check if same length, if not return false
//  * - make everything lowercase
//  * - split string into array
//  * - sort array
//  * - join array back to string
//  * - check if strings are equal
//  * - return boolean
//  */
function isAnagram(s1, s2) {

    let string1 = s1.trim();
    let string2 = s2.trim();
    if (string1.length != string2.length){
        return false;
    }
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    let list1 = string1.split("");
    let list2 = string2.split("");

    list1 = list1.sort();
    list2 = list2.sort();

    string1 = list1.join("");
    string2 = list2.join("");

    if (string1 == string2){
        return true;
    } else {
        return false;
    }

}

