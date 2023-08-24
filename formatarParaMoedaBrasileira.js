var numero = 125.45;
//com R$
var dinheiro = numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(dinheiro);