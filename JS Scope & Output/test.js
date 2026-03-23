function test() {
for (var i=0;i<3;i++) {
setTimeout(() =>console.log(i),100)
  }
}

test()

for (var i=0;i<3;i++) {
  (function(i) {
setTimeout(() =>console.log(i),0)
  })(i)
}