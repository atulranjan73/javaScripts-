// const num = [1,2,3,4,5]
// const even = num.map((num) =>{
//     if(num%2===0){
//         return num
//     }
// })
// console.log(even);

// console.log(num.filter((num) =>{
//     if(num%2===0) return num
// }))

// num.map((n) =>{
//     return n*2
// })
// console.log(num)









// const names = ["anuj" ,"elton" ,"Ayushi" , "nawav " ,"abhinadan " ,"abhinav" ,"astha"];
// const evenNames =names.filter((name)=>{
//     if(names.length%2===0){
//         return name 
//     }
// });
// console.log(evenNames)


// :::::::::::::::::::::::Reduce method ::::::::::::::::::::::::::

const num  = [2,4,6];
const sum = num.reduce((prev,current) =>{
return prev *current ;
},2);
console.log(sum)


const names = ["anuj" ,"elton" ,"Ayushi" , "nawav " ,"abhinadan " ,"abhinav" ,"astha"];
// find the sortes name using the reduce method
let sortname  = names.reduce((prev ,now )=>{
    if(prev.length<now.length)
   {
    return prev ;
   }
   else{
    return now;
   }
})
console.log(sortname)


// find the first latter those names 
names.filter((namme) =>{
    const firstlatter = names.filter
})


const num1 = [11,13 ,14,15,16,17,18];
const ans = Number.find((num)=>{
    if(num%3===0){
        return num;
    }

})
console.log(ans)




