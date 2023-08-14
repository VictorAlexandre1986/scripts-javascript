let teste = "Testando uma string";
let invertida = teste.split("").reverse().join("");
console.log(invertida);

//Ou


function inverterString(str) {
    var invertida = '';
    for (var i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}
console.log(inverterString("Testando a inversão"));