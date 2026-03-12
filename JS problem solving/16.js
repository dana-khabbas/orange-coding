let r='';
for(let x=1;x<=30;x++){
    if(x%3==0 && x%5==0){r+='FizzBuzz ';}
    else if(x%3==0){r+='Fizz ';}
    else if(x%5==0){r+='Buzz ';}
    else
        r+=x+ ' ';
}
console.log(r);