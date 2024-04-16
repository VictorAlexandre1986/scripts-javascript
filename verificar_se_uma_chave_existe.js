var obj = {
    'nome': 'Matheus',
  'idade': 29,
  'profissao': undefined
}
console.log(obj['nome'] !== undefined); // true
console.log(obj['profissao'] !== undefined); // false


console.log(obj.hasOwnProperty('nome')); // true
console.log(obj.hasOwnProperty('nacionalidade')); // false