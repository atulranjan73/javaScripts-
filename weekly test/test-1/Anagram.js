// chek anagram 
function chekAnagram(str1 ,str2){
    let sort_str1 = str1.split('').sort().join('');
    let sort_str2 = str2.split('').sort().join('');
    if(sort_str1===sort_str2){
        return true
    }
    else{
        return false ; 
    }
}

let str1 = "listen"
let str2 = "slient"

console.log(chekAnagram(str1 ,str2));