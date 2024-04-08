let str = "AtulRanjan"; // String first 
let str2 ="Geektser";   // String second 


function reverseString (str){
    return str.split('').reverse().join('')
}
console.log(reverseString(str)) //print the value of first string
console.log(reverseString(str2)) // print the value of second string 
