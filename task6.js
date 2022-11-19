const num1 = +prompt('Please enter the value for A');
const num2 = +prompt('Please enter the value for B');
const result = (num1, num2) => {
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (a && b && a !== b) {
        if (a > b) {
            [a, b] = [a - b, b];
        } else {
            [a, b] = [a, b - a];
        };
    };
    return a || b;
};
console.log(result(num1, num2));