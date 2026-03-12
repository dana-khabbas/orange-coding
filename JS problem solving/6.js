let result='';
for(let i=0 ;i<5;i++){
    
    for(let x=0;x<5;x++){
          if (x < 4 - i) {
            result += '1 ';
        } else {
            result += (1 + i) + " ";
        }
    }
            
result += "\n";
}
console.log(result);