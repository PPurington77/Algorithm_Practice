
    
const str1 = "hello";
const expected1 = "olleh";
    
const str2 = "hello world";
const expected2 = "olleh dlrow";
    
const str3 = "abc def ghi";
const expected3 = "cba fed ihg";
//create function
//loop through word
//reverse word 
//maintain spaces
//return final word
function reverseWords(str) {
    let newstr = str.split(" ")
    let result = ''
    let newResult = ''
    for (let i = newstr.length -1 ; i >= 0; i--) {
        // console.log(newstr[i])
        result += newstr[i]
        // console.log(newstr)
    }
    for (let j = result.length -1; j >= 0; j--) {
        newResult += result[j]
    }
    console.log(newResult)
}


// reverseWords(str2) /// did not solve

//teachers helped with this bottom one which is in python...

// def reverseWithOptions(string, input):
//     tempWrd = ""
//     tempSentence = ""
//     for i, not_used in enumerate(string):
//         if input == 1:
//             j = len(string) - i - 1
//         if input == 2:
//             j = i
//         if string[j] != " ":
//             tempWrd += string[j]
//             continue
//         for k, not_used_either in enumerate(tempWrd):
//             l = len(tempWrd) - k - 1
//             tempSentence += tempWrd[l]
//         tempSentence += " "
//         tempWrd = ""
//     for m, also_not_used_either in enumerate(tempWrd):
//         n = len(tempWrd) - m - 1
//         tempSentence += tempWrd[n]
//     print(tempSentence)
// reverseWithOptions("Hello world", 2)
// reverseWithOptions("I can reverse sentences as well but probably still suck at weird edge cases", 1)