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