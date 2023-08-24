let pessoa = {
    nome: 'Victor',
    idade: 36,
    profissao: 'Programador'
}
with(pessoa) {
    console.log(`O meu nome é  ${nome}  e tem  ${idade}  anos e é ${profissao}`);
}