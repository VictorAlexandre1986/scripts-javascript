function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(primeiraLetraMaiuscula('teste')); // Teste
  console.log(primeiraLetraMaiuscula('olá Mundo')); // Olá Mundo

  //Outra solução

    function primeiraLetraMaiuscula(string) {
        return string.replace(/^\w/, c => c.toUpperCase());
      }
        console.log(primeiraLetraMaiuscula('teste')); // Teste

//Outra solução

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitalize('teste')); // Teste
console.log(capitalize('olá Mundo')); // Olá Mundo

