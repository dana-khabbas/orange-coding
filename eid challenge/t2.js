let arr=[1,4,20,3,10,5];
let target =33;

for(let i=0;i<arr.length;i++){
  let count=arr[i];
  for(let j=i+1;j<arr.length;j++)  {
    count+=arr[j]
    if (count==target){
        console.log("start="+i);
         console.log("start="+j);
    }
  }
}