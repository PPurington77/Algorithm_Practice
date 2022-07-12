
    
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


reverseWords(str2)