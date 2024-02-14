
// Path: remover_espacos.js
function removerEspacos(string) {
    return string.replace(/\s/g, '');
  }
  console.log(removerEspacos('teste')); // teste
  console.log(removerEspacos('olá Mundo')); // oláMundo

  //Outra solução
  


  function removerEspacos(string) {
    return string.split(' ').join('');
  }
  console.log(removerEspacos('teste')); // teste
  console.log(removerEspacos('olá Mundo')); // oláMundo

  //Outra solução

  function removerEspacos(string) {
    return string.replace(/ /g, '');
  }
  console.log(removerEspacos('teste')); // teste
  console.log(removerEspacos('olá Mundo')); // oláMundo


  //Outra solução

  function removerEspacos(string) {
    return string.split(/\s/).join('');
  }
  console.log(removerEspacos('teste')); // teste
  console.log(removerEspacos('olá Mundo')); // oláMundo

  