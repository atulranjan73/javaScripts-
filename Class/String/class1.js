let a = "Rohit"
let b = "100"

let str  = "javascript is Awesome";
console.log(str.indexOf("a"))
console.log(str.indexOf("J")) // ans is -1 means ans is not fond 
console.log(str.lastIndexOf("is"))

let str2 = "abcdabc"
console.log(str2.lastIndexOf())



//give ans true and false 

let str3 = "Atul  is student of geekster"
console.log(str3.includes("atul")) // becouse java is a casesensetive language
console.log(str3.includes("Atul"))

console.log(str.slice(0, 6));


// Concatation 
let a1 = "Atul";
let b1 = "Ranjan";
let c1 = "kumar";

console.log(a1 +"," + b1+ " ," + c1)

// replace string 
console.log(a1.replace("Atul" ,"Ravan"))


// Biggest name is given string

// const names = "atul ayush Ritik Abhinandan ";
// console.log()

// const dt = "2024-03-02 ";
// const dtArray = dt.split("-")
// console.log(dtArray[2] +"-" +dtArray[1] +"-"+dtArray[0])


// const name = "ayush";

// // Capitalize the first letter using string methods
// const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

// // Print the capitalized name
// console.log(capitalizedName); // Output: Atul




// const numbers= [45 ,1 ,44 ,99 ,  67 ,8 ,10];
// for ( let i = 0 ; i<numbers.length-1 ; i++){
//    for ( let j = i+1 ; j<numbers.length ; j++){
//     if(numbers[i]>numbers[j]){
//         let temp = numbers[i];
//         numbers[i]= numbers[j];
//         numbers[j]= temp;

//     }
//    }
// }
// console.log(numbers);


// const email = "atulranjan164@gmail.com"
// console.log(email.split("@")[1].split(".")["0"]);

const nums = [67, 23, 67, 1, 12, 12, 23];

const uniqueNums = [];
const seen = {}; // Object to keep track of unique numbers

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!seen[num]) {
        seen[num] = true; // Mark the number as seen
        uniqueNums.push(num); // Add it to the uniqueNums array
    }
}

console.log(uniqueNums); // Output: [67, 23, 1, 12]




