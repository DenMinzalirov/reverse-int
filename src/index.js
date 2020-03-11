module.exports = function reverse (n) {
    let res = (""+n).split("");
    if (res[0] === '-') {
        return res.slice(1).reverse().join('')
    }
    return res.reverse().join('')
}
