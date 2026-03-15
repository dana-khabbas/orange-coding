for(let x=1;x<=300;x++){
    let num=x;
    let numOfDigits=0;
    let sum=0;
    while(num>0){
        sum+=num%10;
        num=Math.floor(num/10);
        numOfDigits++;

    }
    if(numOfDigits*5==sum){console.log(x);}
}