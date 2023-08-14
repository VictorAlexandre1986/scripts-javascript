// Spread
function somarElementos(a, b, c) {
    console.log(a + b + c);
}
let elementos = [1,5,14]; 
somarElementos(...elementos); // 20
let itensDaLista = ['trigo', 'batata'];
let listaDeCompras = ['banana', ...itensDaLista, 'arroz', 'maçã', 'chocolate'];
console.log(listaDeCompras); // (6) ["banana", "trigo", "batata", "arroz", "maçã", "chocolate"]

//----------------------------------------------------------------------------------------------

let arrA = [1,2,3];
let arrB = [4,5,6];
let arrC = [...arrA, ...arrB];
console.log(arrC); // (6) [1, 2, 3, 4, 5, 6]

