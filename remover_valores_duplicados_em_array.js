var arr = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 7];
var arrSemDuplicados = [...new Set(arr)];
console.log(arrSemDuplicados); // [1, 2, 3, 4, 5, 6, 7]