// Rest
function testandoRest(a, b, ...theArgs) {
    console.log(a, b, theArgs); // 1, 2, [3,4,5]
}

testandoRest(1, 2, 3, 4, 5);

function testandoRest2(...theArgs) {
    console.log(theArgs); // [1,2,3,4,5]
}

testandoRest2(1, 2, 3, 4, 5);

//---------------------------------------------------------------------------------

function multiplicar(multiplicador, ...multiplicados) {
    return multiplicados.map(function(numero) {
        return multiplicador * numero;
    });
}
const multiplicados = multiplicar(3, 1,2,3,4,5);
console.log(multiplicados); // 3,6,9,12,15
function filtrarPares(...numeros) {
    return numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
}
const pares = filtrarPares(1,2,3,4,5,6,7,8,9,10);
console.log(pares); // 2,4,6,8,10