



let a=0;
let b=1;
let r=a+' '+b+' '
for(let n=0;n<10;n++){
    let next = a + b;
    r += next + " ";
    
    a = b;
    b = next; 
}
console.log(r);