function removerSpecials(texto) {
    // eliminando acentuação
texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
texto = texto.replace(/[àáâãäå]/,"a");
texto = texto.replace(/[ÈÉÊË]/,"E");
texto = texto.replace(/[Ç]/,"C");
texto = texto.replace(/[ç]/,"c");
return texto.replace(/[^a-z0-9]/gi,''); 
}
let palavras = [
'acentuação',
'maçã',
'crachá',
'água'
];
for(let i = 0; i < palavras.length; i++) {

console.log(removerSpecials(palavras[i]));
}

let palavraParaEncontrar = 'cracha';
for(let i = 0; i < palavras.length; i++) {
    
  if(removerSpecials(palavras[i]) === palavraParaEncontrar) {
      console.log(`A palavra ${palavras[i]} foi encontrada`);
  }
}
