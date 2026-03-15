for(let i=1;i<=100;i++){
if(i>9){
    let num=i;
dig1=num%10;
num=Math.floor(num/10);
dig2=num%10;
if(dig1<dig2){console.log(i)}
}
if(i==100){console.log(i)}
}