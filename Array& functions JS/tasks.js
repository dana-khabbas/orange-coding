// ### Task 1 — `firstAndLast(arr)`
// Create a function that returns an array containing **only the first and last elements**.
function firstAndLast (x1){
    x1.splice(1,x1.length-2);
    console.log(x1);
}
let x1=[1,2,3,4,5,7,8];
firstAndLast(x1);

// ### Task 2 — `removeMiddle(arr)`
// Create a function that removes the **middle element** from an array.
function removeMiddle(x2){
   
    if(x2.length%2==0){
     x2.splice(Math.floor((x2.length-1)/2),2)   
    }
    else{
       x2.splice(x2.length/2,1);

    }
    console.log(x2);
}
let x2=[1,2,3,4,5];
removeMiddle(x2);

// ### Task 3 — `swapFirstLast(arr)`
// Create a function that **swaps the first and last elements**.
function swapFirstLast(x3){
    let x3_temp=x3[0];
    x3[0]=x3[x3.length-1];
    x3[x3.length-1]=x3_temp;
    console.log(x3);
}

let x3=[1,2,3,4,5,6,7];
swapFirstLast(x3);

// ### Task 4 — `insertAtMiddle(arr,value)`
// Insert a value **in the middle of the array**.
function insertAtMiddle(x4,digit){
    x4.splice(Math.floor(x4.length / 2),0,digit);
    console.log(x4);
}

let x4=[1,2,3,4,5];
insertAtMiddle(x4,10);

// ### Task 5 — `duplicateArray(arr)`
// Create a function that **duplicates the array content**.
function duplicateArray(x5){
    x5=x5.concat(x5);
    console.log(x5);
}
let x5=[1,2,3];
duplicateArray(x5);

// ### Task 6 — `removeDuplicates(arr)`
// Create a function that removes **duplicate numbers**.

function removeDuplicates(){
let x6_result=[];
for(let i=0;i<x6.length;i++){
    if(!x6_result.includes(x6[i])){
        x6_result.push(x6[i]);
    }
}
console.log(x6_result);
}

let x6=[1,2,2,3,4,3,2,4,5];
removeDuplicates(x6);

// ### Task 7 — `findSecondLargest(arr)`
// Return the **second largest number**.
function findSecondLargest(x7){
    let max1=x7[0];
    let max2=max1;
    for(let i=0;i<x7.length;i++){
        if(max1<x7[i]){max2=max1;
            max1=x7[i];
        }
    }
    console.log(max2);
}

let x7=[4,9,2,10,6];
findSecondLargest(x7);

// ### Task 8 — `findSecondSmallest(arr)`
// Return the **second smallest number**.
function findSecondSmallest(x8){
    let max1=x8[0];
    let max2=max1;
    for(let i=0;i<x8.length;i++){
        if(max1>x8[i]){max2=max1;
            max1=x8[i];
        }
    }
    console.log(max2);
}

let x8=[4,9,2,10,6];
findSecondSmallest(x8);

// ### Task 9 — `removeGreaterThan(arr,value)`
// Return a new array **without numbers greater than a given value**.
let x9 = [10,5,20,3,8];
let x9_result = x9.filter(removeGreaterThan);
console.log(x9_result);

function removeGreaterThan(x9) {
  return x9 < 10;
}

// ### Task 10 — `removeLessThan(arr,value)`
// Return numbers **greater than or equal to the value**.
let x10 = [10,5,20,3,8];
let x10_result = x10.filter(removeLessThan);
console.log(x10_result);

function removeLessThan(x10) {
  return x10 >= 10;
}

// ### Task 11 — `countOccurrences(arr,value)`
// Return how many times a value appears.
function countOccurrences(x11,digit){
    let x11_result=0;
for(let i=0;i<x11.length;i++){
    if(x11[i]==digit){
        x11_result++;
    }
}
console.log(x11_result);
}

let x11=[1,2,3,2,4,2];
countOccurrences(x11,2)

// ### Task 12 — `arrayIntersection(arr1,arr2)`
// Return elements that exist in **both arrays**.
function arrayIntersection(x12_1,x12_2){
    let x12_result=[];
    for(let i=0;i<x12_1.length;i++){
        for(let z=0;z<x12_2.length;z++){
            if(x12_1[i]==x12_2[z]){
                x12_result.push(x12_1[i]);
            }
        }
    }
    console.log(x12_result);
}

let x12_1=[1,2,3,4] ;
let x12_2=[3,4,5,6] ;
arrayIntersection(x12_1,x12_2);

// ### Task 13 — `arrayDifference(arr1,arr2)`
// Return values that exist in **arr1 but not in arr2**.

function arrayDifference(x13_1,x13_2){
    let x13_result=[];
    for(let i=0;i<x13_1.length;i++){
          if(!x13_2.includes(x13_1[i])){
            x13_result.push(x13_1[i]);
        }
    }
    console.log(x13_result);
}

let x13_1=[1,2,3,4] ;
let x13_2=[3,4,5,6] ;
arrayDifference(x13_1,x13_2);

// ### Task 14 — `uniqueMerge(arr1,arr2)`
// Merge two arrays and remove duplicates.
function uniqueMerge(x14_1,x14_2){
x14_result=x14_1.concat(x14_2);
removeDuplicates(x14_result);

}

let x14_1=[1,2,3];
let x14_2=[3,4,5];
uniqueMerge(x14_1,x14_2);

// ### Task 15 — `removeNegativeNumbers(arr)`
// Remove **all negative numbers**.
function removeNegativeNumbers(x15){
x15_result=[];
for(let i=0;i<x15.length;i++){
    if(x15[i]>0){
        x15_result.push(x15[i]);
    }
}
console.log(x15_result);
}
let x15=[5,-2,10,-3,7];
removeNegativeNumbers(x15);

// ### Task 16 — `wordsLongerThan(arr,length)`
// Return words longer than a specific length.
function wordsLongerThan(x16,digit){
let x16_result=[];
for(let i=0;i<x16.length;i++){
    if(x16[i].length>digit){
        x16_result.push(x16[i]);
    }
}
console.log(x16_result);
}
let x16=["alex","mohammad","ali","sara"];
wordsLongerThan(x16,4);

// ### Task 17 — `countLetterInWords(arr,letter)`
// Count how many words contain a specific letter.
function countLetterInWords(x17,char){
x17_result=0;
for(let i=0;i<x17.length;i++){
    if(x17[i].includes(char))
        x17_result++;
}
console.log(x17_result);
}

let x17=["apple","banana","car","dog"];
countLetterInWords(x17,'a');

// ### Task 18 — `removeShortWords(arr,length)`
// Remove words shorter than a specific length.

function removeShortWords(x18,digit){
wordsLongerThan(x18,digit)
}

let x18=["alex","mohammad","ali","sara"];
removeShortWords(x18,3);

// ### Task 19 — `findLongestWord(arr)`
// Return the longest word in the array.
function findLongestWord(x19){
    x19_result='';
    for(let i=0;i<x19.length;i++){
        if(x19_result.length<x19[i].length)
          {  x19_result=x19[i];}
    }
    console.log(x19_result);

}

let x19=["marwan","alex","ahmad","ali","sara"];
findLongestWord(x19);


// ### Task 20 — `findShortestWord(arr)`
// Return the shortest word.
function findShortestWord(x20){
  x20_result=x20[0];
    for(let i=1;i<x20.length;i++){
        if(x20_result.length>x20[i].length)
          {  x20_result=x20[i];}
    }
    console.log(x20_result);
}

let x20=["marwan","alex","ahmad","ali","sara"];
findShortestWord(x20);