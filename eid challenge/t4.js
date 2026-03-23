let buldings= [0,1,0,2,1,0,1,3,2,1,2,1];
let total=0;
for(let i=1;i<buldings.length;i++){
    let maxleft=0;
    let maxright=0;
    let water=0;
    for(let j=0;j<i;j++){
        if(maxleft<buldings[j])
            maxleft=buldings[j];
    }
     for(let k=i+1;k<buldings.length;k++){
        if(maxright<buldings[k])
            maxright=buldings[k];
       
    }
 water=Math.min(maxleft,maxright)-buldings[i];
       if (water>0){
        total+=water;
       }
}
console.log(total);