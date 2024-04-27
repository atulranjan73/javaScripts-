// const promiseone = new Promise(function( resolve ,reject){
//    setTimeout(function() {
//     console.log('aysn task is compelete');
//     resolve()
//    } , 1000)
   
// }) 
// promiseone.then(function(){
//     console.log("promise consumed");
// })



 new Promise(function(resolve ,reject){
   setTimeout(function() {
    console.log('aysn task is compelete');
    resolve()
   } , 5000)
   
}).then(function(){
    console.log("promise consumed");
})


const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve(
                {
                    username :"Atul ranjan",
                    password : "1223"
                }
            )
        }
        else{
            reject("Error some time went wrong")
        }
        
    }, 1000)
})

promisethree
then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})
