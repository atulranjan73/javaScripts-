function Targetsum(arr ,target){
    let i = 0 ; 
    let j = arr.length-1 ;
    arr.split('').sort().join('');
    while(i<j){
        let sum = arr[i]+arr[j];
        if(sum===target){
           console.log(arr[i] + arr[j]);
        }
        else if(target>sum){
            j--;
        }
        else {
            i++;
        }
        

    }

}


Targetsum([1,3,4,54,6,6,7,8] ,9)