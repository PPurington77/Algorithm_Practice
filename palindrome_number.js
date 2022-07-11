function palindrome(x){
    let array = x.toString().split(""); //make the number a string, then push it into an array
    array.reverse();
    let number = ""
    for( let i = 0; i < array.length; i++) {
        number += array[i]
    }
    Number(number);
    if (number == x) {
        console.log("it works")
        return true
    }
    else {
        console.log("it don't")
        return false
    }
}

var pally = palindrome(101);
console.log(pally);