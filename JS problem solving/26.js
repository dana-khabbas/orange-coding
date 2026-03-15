
for(let x=1;x<=500;x++){
    let num=x;
    let rev=0;
while(num>0){
    dig=num%10;
    rev+=(dig*10);
    num=Math.floor(num/10);
}
if(rev%3==0){console.log(x);}
}