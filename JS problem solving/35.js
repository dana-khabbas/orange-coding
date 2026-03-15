for(let x=1;x<=500;x++){
    let num =x;
    let total=1
    while(num>0){
        dig=num%10;
        total=total*dig;
        num=Math.floor(num/10);
    }
    if(total%5==0){console.log(x);}
}