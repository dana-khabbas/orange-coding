for (let x = 1; x <= 500; x++) {
    let num = x;
 let valid=true;

    while (num >=10) {
        let dig1 = num % 10;
        num=Math.floor(num/10);
        let dig2=num%10;
       if(dig1<=dig2){
        valid=false;
        break;
        ;}


        
    }

if (valid){console.log(x);}
}