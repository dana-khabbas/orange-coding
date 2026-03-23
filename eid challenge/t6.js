let arr=[1,2,3,4];
let times;
let newarr=[];
for(let i=0;i<arr.length;i++){
    times=1;
  for(let j=0;j<arr.length;j++)
  {
    if(j==i){continue;}
    times*=arr[j]
  }
  newarr[i]=times;
}

console.log(newarr);