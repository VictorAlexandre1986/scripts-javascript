var codigoDeBarras = "52459.12136 21627.007186 37931.981056 7 80260000001400";

var vencimento = codigoDeBarras.slice(40, 44); //7026 é o que precisamos

var date = new Date('10/07/1997');

date.setTime(date.getTime() + (vencimento * 24 * 60 * 60 * 1000)); // criando a data de vencimento

console.log(("0" + (date.getDate())).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear()); // exibição da data