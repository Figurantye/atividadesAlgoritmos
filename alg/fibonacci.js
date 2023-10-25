console.time("execution time")
function fib(n){
    let a = BigInt(0), b = BigInt(1);
    for (let i = 0; i < n; i++){
        [a, b] = [b, a +b]
    }
    console.log(a.toString());
}
var resultado = fib(1000)
console.time("Execution Time")