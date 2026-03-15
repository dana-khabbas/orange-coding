let total=0;
for (let i=1 ;i<=200;i++){
    let number=i;
 
while(number>0){
let digit =number%10;
total+=digit;
number=Math.floor(number / 10);

}
if(total==5){console.log(i);}
total=0;

}