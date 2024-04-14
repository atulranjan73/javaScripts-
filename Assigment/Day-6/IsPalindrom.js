var isPalindrome = function(x) {
    // Convert the number to a string
    const str = x.toString();
    
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    return str === reversedStr;
};

let x = 121;
if(isPalindrome(x)){
    console.log("true");
}
else{
    console.log("false");
}