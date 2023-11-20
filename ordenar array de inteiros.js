// Array de números desordenados
let numeros = [4, 2, 8, 1, 6];

// Ordenando o array
numeros.sort(function(a, b) {
    return a - b;
});

// Exibindo o array ordenado
console.log(numeros); // Saída: [1, 2, 4, 6, 8]