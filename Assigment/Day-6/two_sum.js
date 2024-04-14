
nums = [2,7,11,15] 
target = 9
for(let i = 0 ; i<nums.length ; i++){
    let j = nums.length-1 ; 
    let sum = nums[i] + nums[j];
    nums.sort((a ,b) => a-b );// sort the array 
    while(i<j){
        let sum = nums[i] + nums[j];
        if(sum === target){
            console.log("(" + i + ", " + j + ")");
            i++ ;
            j--;
        }
        else if(sum>target){
            j--;
        }
        else{
            i++;
        }
    }
}


