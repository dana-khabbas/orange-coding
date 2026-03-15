for(let x=1;x<100;x++){
    let num=x;
    if(x>9){
        dig1=num%10;
        num=Math.floor(num/10);
        dig2=num%10;
        sum=dig1+dig2;
        product=dig1*dig2;
        if(sum==product){console.log(x);}
    }
}