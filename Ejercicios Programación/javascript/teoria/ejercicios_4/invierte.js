function invierte(num) {
    let inv = 0;
    while (num != 0) {
        inv = inv * 10 + num % 10;
        num = Math.trunc(num / 10);
    }
    return inv;
}
module.exports = invierte;