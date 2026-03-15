for(let x=1;x<=300;x++){
    let num=x;
    let total=0;
    while(num>=10){
        let digit1=num%10;
        num=Math.floor(num/10);
         let digit2=num%10;
         if(digit1==digit2){total++;}

    }
    if(total==1){console.log(x);}
}