for(let x=1;x<=100;x++){
    let num=x;
    let total=0;
    while(num>0){
        total+=(num%10);
        num=Math.floor(num/10);
    }
    if(total>10){console.log(x);}
}