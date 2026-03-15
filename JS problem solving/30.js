for(let x=1;x<=300;x++){
    let total=0;
    let num=x;
    lastDig=num%10;
    num=Math.floor(num/10);
    while(num>0){
        total+=num%10;
         num=Math.floor(num/10);
    }
    if(total==lastDig){console.log(x);}
}