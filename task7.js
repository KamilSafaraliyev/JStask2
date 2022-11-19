function seven() {
    let a = +prompt('Please enter a value A:')
    console.log('A=' + a)

    let mirror = 0;
    let r;
    while (a != 0) {
        r = a % 10;
        mirror = mirror * 10 + r;
        a = (a - r) / 10;
    }
    console.log('Mirror:' + mirror)
}