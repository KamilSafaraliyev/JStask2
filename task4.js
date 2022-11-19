function four() {
    const a = +prompt('Enter A');
    const b = +prompt('Enter B')

    console.log('A=' + a)
    console.log('B=' + b)

    if (a > b) {
        for (let i = b; i <= a; i++) {
            if (i % 7 == 0) {
                console.log(i)
            }
        }
    } else {
        for (let i = b; i >= a; i--) {
            if (i % 7 == 0) {
                console.log(i)
            }
        }
    }
}