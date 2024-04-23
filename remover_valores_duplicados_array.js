function itensUnicos(arr) {
    return arr.filter((v, i, a) => a.indexOf(v) === i)
}
var arr = [1, 2, 2, 3, 4, 4, 5, 6, 'a', 'b', 'b'];
var unicos = itensUnicos(arr);
console.log(unicos); // [1, 2, 3, 4, 5, 6, 'a', 'b']