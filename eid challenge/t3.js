let stock=[7,1,5,3,6,4];
let minPrice=stock[0];
let maxProfit=0;
for(let i=1;i<stock.length;i++){
    if(stock[i]<minPrice)
        minPrice=stock[i];
    if(maxProfit<stock[i]-minPrice)
        maxProfit=stock[i]-minPrice;
}
console.log(maxProfit);