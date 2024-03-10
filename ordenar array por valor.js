var a = [1,5,6,7,5,4,3,1];
var b = [8,6,5,4,3,2,1,50,12];
function sortGreater(a, b) {
    return a - b;
}
console.log(a.sort(sortGreater)); // [1, 1, 3, 4, 5, 5, 6, 7]
console.log(b.sort(sortGreater)); // [1, 2, 3, 4, 5, 6, 8, 12, 50]