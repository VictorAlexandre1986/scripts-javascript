let nomes = ['Victor', 'Alexandre', 'Braga', 'Ribeiro'];
console.log(nomes.includes('Victor'));



let numeros1 = [0, 1, 2, 1, 0];
const valor = 3;
const encontrado = numeros1.find(elemento => elemento === valor);
if (encontrado !== undefined) {
    console.log(`${valor} está presente no array.`);
  } else {
    console.log(`${valor} não está presente no array.`);
  }




const array = [1, 2, 3, 4, 5];
const valor1 = 3;

if (array.indexOf(valor1) !== -1) {
  console.log(`${valor1} está presente no array.`);
} else {
  console.log(`${valor1} não está presente no array.`);
}




if (array.some(elemento => elemento === valor)) {
    console.log(`${valor1} está presente no array.`);
  } else {
    console.log(`${valor1} não está presente no array.`);
  }