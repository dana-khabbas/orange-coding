let count=[1,2,3,1,2,3,4,5];
let arr=[count[0]];
for(let i=0;i<count.length;i++){
    for(let j=0;j<arr.length;j++){
        if(count[i]==arr[j]){
            arr=[];
            break;}
       
    }
    arr.push(count[i]);
}
console.log(arr);


// it is nooot the right solution but i couldnt understand the question well
