function isPalindrome(str) {
    let start = 0 ;
    let end = str.length-1 ; 

    while(start < end ){
        if(str[start]!= str[end]){
            return false ; 
        }
        else { 
            return true ; 
        }
    }
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("race car")); // Output: true
console.log(isPalindrome("hello")); // Output: false
