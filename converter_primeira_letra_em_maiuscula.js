var texto = "testando uma string";
var texto2 = "TESTANDO OUTRA STRING";
function capitalizeFirst(str) {
  var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  return subst;
}
console.log(capitalizeFirst(texto)); // "Testando Uma String"
console.log(capitalizeFirst(texto2)); // "Testando Outra String"