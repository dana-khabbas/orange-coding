for (let x = 10; x <= 200; x++) {
    let num = x;
  
    let dig1=0;
    let dig2=0;
    while (num >= 10) {
        dig1 = num % 10;
        num=Math.floor(num/10);
        dig2=num%10;

        
        
    }
    if(Math.abs(dig1-dig2)==2){console.log(x);}

}