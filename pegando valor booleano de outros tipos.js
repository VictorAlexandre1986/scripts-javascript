let a = "Tem algum valor";
let b;
let c=[];
let d = {}
let e = { nome: 'Victor'}
let f = undefined
let g = null
let h = 0

if(!!a) {
    console.log("A variável a tem valor");
}
if(!!b) {
    console.log("A variável b tem valor");
}

console.log('String '+!!a);
console.log('variavel sem atribuição '+ !!b);
console.log('Array vazio '+ !!c);
console.log('Objeto vazio '+ !!d);
console.log('Objeto com valor '+ !!e);
console.log('undefined '+ !!f);
console.log('null '+ !!g);
console.log('zero '+ !!h);

