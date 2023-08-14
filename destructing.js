const arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

//----------------------------------------------------------------------------------
const obj = {
    nome: 'Victor Alexandre',
    sobrenome: 'Braga',
    idade: 36,
    pais: 'Brasil'
}
let {nome, sobrenome, idade, pais} = obj

console.log(`${nome} ${sobrenome} tem ${idade} e mora no ${pais}.`)

//-----------------------------------------------------------------------------------

function numeros() {
    return [5, 10];
}
let [num1, num2] = numeros();
console.log(num1); // 5
console.log(num2); // 10

//------------------------------------------------------------------------------------

// ignorando elementos
const lista = ['Maçã', 'Laranja', 'Banana', 'Caqui'];
let[, , ,caqui] = lista
console.log(caqui); // Caqui

//------------------------------------------------------------------------------------
//Funciona com qualquer coisa que pode ser iterada
let [x,y,z] = 'xyz';
console.log(x); // x
console.log(y); // y
console.log(z); // z

//------------------------------------------------------------------------------------
//Destructuring com Rest Operator

const numeros2 = [1,2,3,4,5,6,7,8,9,10];
const [parte1, ...parte2] = numeros2;
console.log(parte1); // 1 
console.log(parte2); // [2, 3, 4, 5, 6, 7, 8, 9, 10]

//------------------------------------------------------------------------------------