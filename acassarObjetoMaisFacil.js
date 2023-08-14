//  a utilização do with é bem simples: quando precisamos acessar várias propriedades do objeto,
// declaramos ele em uma função with
//Aí a acessibilidade do objeto ficará mais simples

let pessoa = {
    nome: 'Victor',
  idade: 36,
  profissao: 'Programador'
}
with(pessoa) {
    console.log("O nome dele é " + nome + " e tem " + idade + " anos e é " + profissao);
}