function two() {
    const number = +prompt('Please enter a value A:')
    for (let i = 1; i <= 1000; i++) {
        if (i * i < number) {
            console.log(i)
        }
    }
}