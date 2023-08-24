const paragrafo = document.createElement("p");
const texto = document.createTextNode("Testando");
paragrafo.appendChild(texto);
console.log(paragrafo);

const body = document.body;
body.appendChild(paragrafo);

//Ou em vez de inserir no body pode mapear uma div ja pronta no html e inserir nela