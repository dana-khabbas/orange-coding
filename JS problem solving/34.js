for(let x=1;x<=200;x++){
    let num =x;
    let rev=0;
    while(num>0){
       let dig=num%10;
        rev=(rev*10)+dig;
        num=Math.floor(num/10);
    }
    if(rev>x){console.log(x);}
}