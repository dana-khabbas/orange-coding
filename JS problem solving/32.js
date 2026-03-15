for(let x=1;x<=500;x++){
    let num=x;
    let total=0;
    let valid=true;
    while(num>0){
        total+=(num%10);
        num=Math.floor(num/10);
    }

   for(let i=2;i<=Math.sqrt(total);i++){
        if(total%i==0){valid=false;}
   }
   if(valid){
    console.log(x);
   }
}