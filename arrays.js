let letras = ['A', 'B', 'C', 'D','B', 'E', 'F'];

//Encontrar o indice do elemento
console.log(letras.indexOf('B'));

//Encontrar o indice do  ultimo elemento repetido
console.log(letras.lastIndexOf('B'));

//Removendo o ultimo elemento
letras.pop();

//Removendo o primeiro elemento
letras.shift();

//posicao do cursor, qts elementos deletar, add elementos separadas por virgula
letras.splice(2,1);


//Adicionar elemento no final de um array
letras.push('G');

//Adicionar um elemento em uma posição especifica
letras[5] ='G';

//Adicionar varios elementos apartir de uma posição
letras.splice(2,0,'G','H','I')

//Verificar se o elemento existe ou nao em um array, retorna um booleano
letras.includes('B');

//Método find irá retornar o primeiro valor que corresponder a o que estamos procurando
console.log(letras.find((letra) =>{ letra == 'B'}))

function numeroPar(num) {
    if(num % 2 === 0) {
        return num;
    }
}
const numeros = [1,3,5,6,9,12];
console.log(numeros.find(numeroPar)); // 6


//No caso do findIndex() em vez de retornar o elemento,
//ele nos retornará o índice do primeiro elemento
console.log(letras.findIndex((letra) =>{ letra == 'B'}))

const idades = [12,15,13,14,22];
function maiorDeIdade(idade) {
    if(idade >= 18) {
        return idade;
    }
}
console.log(idades.findIndex(maiorDeIdade)); // 4




//Removendo valores duplicados
let array = [1,2,3,4,4,5,6,7,8,6,5,4,3,2,1];
let newArray = [...new Set(array)];
console.log(newArray); //  [1, 2, 3, 4, 5, 6, 7, 8]



//Ver comprimento do array
let nomes = ['Victor', 'Alexandre', 'Braga'];
console.log(nomes.length); // 3



//Ordenando
let numbers = [5,32,1,838,34,2,5,9,8,2,98,42,64];
let numbersAsc = numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbersAsc); // [1, 2, 2, 5, 5, 8, 9, 32, 34, 42, 64, 98, 838]


let numbers2 = [5,32,1,838,34,2,5,9,8,2,98,42,64];
let numbersDesc = numbers2.sort(function(a, b) {
    return b - a;
});
console.log(numbersDesc); // [838, 98, 64, 42, 34, 32, 9, 8, 5, 5, 2, 2, 1]


//Transformar uma string em um array
const texto = "Temos uma string aqui";
const array = texto.split(" ");
console.log(array); // ["Temos", "uma", "string", "aqui"]; 