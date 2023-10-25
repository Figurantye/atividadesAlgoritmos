//1
let a = true
let b = false
let c = true

console.log("primeira operação:",a && b);
console.log("segunda operação:",b && c);
console.log("terceira operação:",a && c);
console.log("quarta operação:",a && b && c);

//2
console.log("primeira operação:",a || b);
console.log("segunda operação:",b || c);
console.log("terceira operação:",a || c);
console.log("quarta operação:",a || b || c);

//3
console.log("primeira operação:",!a || b);
console.log("segunda operação:",b || !c);
console.log("terceira operação:",!a || !c);
console.log("quarta operação:",!a || b || !c);