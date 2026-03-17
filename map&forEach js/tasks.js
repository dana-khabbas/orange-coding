/*
 * Exercise 1
 * Double each number in the array
 * Test Case:
 * console.log(doubleNumbers([1,2,3]))
 * Result:
 * [2,4,6]
*/
function doubleNumbers(arr){
arr.forEach((num, index, arr) => {
 arr[index] = num * 2;
});
console.log(arr);
}
let t1=[1,2,3];
doubleNumbers(t1);

/*
 * Exercise 2
 * Convert numbers to strings
 * Test Case:
 * console.log(numbersToStrings([1,2,3]))
 * Result:
 * ["1","2","3"]
*/
function numbersToStrings(arr){
arr.forEach((num, index, arr) => {
 arr[index] = num.toString();
});
console.log(arr);
}

let t2=[1,2,3];
numbersToStrings(t2);

/*
 * Exercise 3
 * Make all names uppercase
 * Test Case:
 * console.log(upperCaseNames(["ali","sara"]))
 * Result:
 * ["ALI","SARA"]
*/
function upperCaseNames(arr){
arr.forEach((item, index, arr) => {
 arr[index] = item.toUpperCase();
});
console.log(arr); 
}

let t3=["ali","sara"];
upperCaseNames(t3);

/*
 * Exercise 4
 * Add 5 to each number
 * Test Case:
 * console.log(addFive([10,20,30]))
 *
 * Result:
 * [15,25,35]
*/
function addFive(arr){
arr.forEach((num, index, arr) => {
 arr[index] = num +5;
});
console.log(arr);
}

let t4=[10,20,30];
addFive(t4);

/*
 * Exercise 5
 * Get only the name from objects
 * Test Case:
 * console.log(getNames([
 * {name:"Ali",age:20},
 * {name:"Sara",age:25}
 * ]))
 *
 * Result:
 * ["Ali","Sara"]
*/
function getNames(arr){
let result=arr.map(x=>x.name)
console.log(result);
}
let t5=[
  {name:"Ali",age:20},
  {name:"dana",age:25}
 ];

 getNames(t5);

 /*
 * Exercise 6
 *
 * Return the length of each word
 *
 * Test Case:
 * console.log(wordLengths(["apple","dog"]))
 *
 * Result:
 * [5,3]
*/
function wordLengths(arr){
let result=arr.map(x=>x.length);
console.log(result);
}
let t6= ["apple","dog"];
wordLengths(t6);

/*
 * Exercise 7
 *
 * Multiply each number by its index
 *
 * Test Case:
 * console.log(valTimesIndex([2,3,4]))
 *
 * Result:
 * [0,3,8]
*/
function valTimesIndex(arr){
let result=arr.map((x,index)=> {return index*x});
console.log(result);
}
let t7=[2,3,4];
valTimesIndex(t7);

/*
 * Exercise 8
 * Create array of usernames starting with "@"
 * Test Case:
 * console.log(makeUsernames([
 * {username:"ahmad"},
 * {username:"sara"}
 * ]))
 *
 * Result:
 * ["@ahmad","@sara"]
*/
function makeUsernames(arr){
let result=arr.map(x=>'@'+x.username);
console.log(result);
}

let t8=[
  {username:"ahmad"},
  {username:"sara"}
 ];

 makeUsernames(t8);

 /*
 * Exercise 9
 *
 * Create array of squares
 *
 * Test Case:
 * console.log(squareNumbers([2,3,4]))
 *
 * Result:
 * [4,9,16]
*/
function squareNumbers(arr){
let result=arr.map(x=>x*x);
console.log(result);
}

let t9=[2,3,4];
squareNumbers(t9);

/*
 * Exercise 10
 *
 * Convert words to their first letter
 *
 * Test Case:
 * console.log(firstLetters(["Ali","Sara"]))
 *
 * Result:
 * ["A","S"]
*/
function firstLetters(arr){
let result=arr.map(x=>x[0])
console.log(result);

}
let t10=["Ali","Sara"];
firstLetters(t10);

/*
 * Exercise 11
 *
 * Count total sum using forEach
 *
 * Test Case:
 * console.log(sumNumbers([10,20,30]))
 *
 * Result:
 * 60
*/
function sumNumbers(arr){
let sum=0;
arr.forEach(num => {
 sum+= num ;
});
console.log(sum);
}

let t11=[10,20,30];
sumNumbers(t11);

/*
 * Exercise 12
 *
 * Count how many numbers are even
 *
 * Test Case:
 * console.log(countEven([1,2,3,4]))
 *
 * Result:
 * 2
*/
function countEven(arr){
let sum=0;
arr.forEach(num => {
 if(num%2==0)
    sum++ ;
});
console.log(sum);
}

let t12=[1,2,3,4];
countEven(t12);

/*
 * Exercise 13
 *
 * Create array where each number becomes number * 10
 *
 * Test Case:
 * console.log(timesTen([1,2,3]))
 *
 * Result:
 * [10,20,30]
*/
function timesTen(arr){
let result=arr.map(x=>x*10)
console.log(result);
}

let t13=[1,2,3];
timesTen(t13);

/*
 * Exercise 14
 *
 * Add property "adult" depending on age
 *
 * Test Case:
 * console.log(addAdult([
 * {name:"Ali",age:20},
 * {name:"Sara",age:15}
 * ]))
 *
 * Result:
 * [
 * {name:"Ali",age:20,adult:true},
 * {name:"Sara",age:15,adult:false}
 * ]
*///////// return here
function addAdult(arr){

arr.forEach(x => {
 x.age>18?x.adult=true:x.adult=false
});
console.log(arr);

}
let t14=[
  {name:"Ali",age:20},
  {name:"Sara",age:15}
  ];
  addAdult(t14);

/*
 * Exercise 15
 *
 * Create array of prices after adding 10 tax
 *
 * Test Case:
 * console.log(addTax([100,200]))
 *
 * Result:
 * [110,210]
*/
function addTax(arr){
let result=arr.map(x=> x+10);
console.log(result);
}
let t15=[100,200];
addTax(t15);

/*
 * Exercise 16
 *
 * Count how many numbers are greater than 50
 *
 * Test Case:
 * console.log(countBig([20,60,80]))
 *
 * Result:
 * 2
*/
function countBig(arr){
let result=arr.filter(x=> x > 50)
console.log(result.length);
}

let t16=[20,60,80];
countBig(t16);

/*
 * Exercise 17
 *
 * Convert numbers to "Number: X"
 *
 * Test Case:
 * console.log(labelNumbers([5,10]))
 *
 * Result:
 * ["Number: 5","Number: 10"]
*/
function labelNumbers(arr){
// your code here
}

/*
 * Exercise 18
 *
 * Get product names
 *
 * Test Case:
 * console.log(productNames([
 * {product:"Laptop",price:1000},
 * {product:"Phone",price:500}
 * ]))
 *
 * Result:
 * ["Laptop","Phone"]
*/
function productNames(arr){
let result=arr.map(x=>x.product)
console.log(result);
}
let t18=[
  {product:"Laptop",price:1000},
 {product:"Phone",price:500}
 ];
 productNames(t18);

 /*
 * Exercise 19
 *
 * Create array where each number becomes number + index
 *
 * Test Case:
 * console.log(addIndex([5,5,5]))
 *
 * Result:
 * [5,6,7]
*/
function addIndex(arr){
arr.forEach((num, index, arr) => {
 arr[index] = num +index;
});
console.log(arr);
}

let t19=[5,5,5];
addIndex(t19);

/*
 * Exercise 20
 *
 * Create array of boolean values (true if even)
 *
 * Test Case:
 * console.log(isEvenArray([1,2,3,4]))
 *
 * Result:
 * [false,true,false,true]
*/
function isEvenArray(arr){
let result=arr.map(x=>x%2==0)
console.log(result);
}

let t20=[1,2,3,4];
isEvenArray(t20);