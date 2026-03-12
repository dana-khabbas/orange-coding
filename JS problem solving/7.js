let out='';
for(let x =1;x<=5;x++){
    for (let i=1;i<=5;i++){
        if(i==x){out+=i+' ';}
        else{out+=0+' ';}
    }
    out+="\n";
}
console.log(out);