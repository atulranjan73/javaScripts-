function recurtion(x){
    if(x>0){
        console.log(x ,"first");
        recurtion(x-1);
        console.log(x ,"second");
    }
}
recurtion(4);