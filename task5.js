let n = +prompt('Please enter the value for A')

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
document.write(fib(n));