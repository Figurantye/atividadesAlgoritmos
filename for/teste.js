function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

for (var i = 2; i < 100; i++) if (primeNumber(i)) console.log(i);