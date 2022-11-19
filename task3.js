function three() {
    const a = +prompt('Enter A')
    for (let i = a - 1;; i--) {
        if (a % i == 0) {
            console.log(i)
            break
        }
    }
}