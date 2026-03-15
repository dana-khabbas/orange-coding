let total=1;
for(let x=1;x<=300;x++){
    num=x;
    while(num>0){
        total=total*(num%10);
    
        num=Math.floor(num/10);
        

    }
    if(x%total==0){console.log(x);}
    total=1;
}