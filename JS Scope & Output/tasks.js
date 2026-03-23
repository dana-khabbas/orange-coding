// 1- Hoisting Trap

console.log(a);
var a=10;
// undefined,bcs in var only declaration go to the top not the Value ;

// 2-Temporal Dead Zone (TDZ)
console.log(a)
let a = 10
// Cannot access 'a' before initialization, bcs its let not var

// 3- Function vs Block Scope

var x=1

function test() {
if (true) {
var x=2
  }
console.log(x)
}

test()
console.log(x)

// 2 1 , bcs var is function scoped
 
//4- Shadowing + TDZ Trap
let x=10

function test() {
console.log(x)
let x=20
}

test()

// cannot access x because we are using let so when trying to access local x its do error

// task 5 Classic Closure Problem (var)


for (var i=0;i<3;i++) {
setTimeout(() =>console.log(i),0)
}
// 3 3 3 beacuse var uses one variable for all the itarations 

// task6 Closure with `let`


for (let i=0;i<3;i++) {
setTimeout(() =>console.log(i),0)
}
//0 1 2 , beacuse we are using let and  let creates a separate variable for each iteration.

//task 7 ### Nested Scope (Closure)


var a=1

function outer() {
var a=2

function inner() {
console.log(a)
  }

inner()
}

outer()

// 2, beacuse we are using var and var is a function scope so it reaches the nearest declaration of the varoable


// task 8 Re-declaration Error

var a=10
let a=20
// error on let because we in let we cant redeclare the same variable 

// task 9 ### Function Hoisting vs Variable Hoisting

console.log(foo)

var foo=10

function foo() {
return 20
}

//js see  function first

//task 10 ### Scope + Mutation


let a=10

function test() {
a=20
}

test()
console.log(a)
// 20 ,in let we can change the value of the variable ant it stored localy and globally

// task11 Block Scope Leakage (`var`)


{
var a=10
}

console.log(a)
//10 because var is function  scoped (can leak outside blocks)

//task 12 ### Block Scope (`let`)


{
let a=10
}

console.log(a)

//error a is not defined , beacuse we are using let and let is  block-scoped so it can't leak outside blocks

//task 13 ### Parameter Shadowing

let a=5

function test(a) {
console.log(a)
}

test(10)
// 10 , we can access a because its the var of the function ,so it shadows the global a 

// task 14 ### Closure + Async Trap

function test() {
for (var i=0;i<3;i++) {
setTimeout(() =>console.log(i),100)
  }
}

test()
///3 3 3 , bc var uses one var for each iteration

// task 15  IIFE Fix (Advanced)


for (var i=0;i<3;i++) {
  (function(i) {
setTimeout(() =>console.log(i),0)
  })(i)
}

// 0 1 2 , bc we are passing it to function -> which is new scope for each value 



