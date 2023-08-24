// não habilita o recurso de 'voltar', similar a um redirect HTTP
window.location.replace("https://www.google.com.br");
// comportamento semelhante a clicar em um link
window.location.href = "https://www.google.com.br";




//Podemos também voltar a página com JavaScript, que estão no histórico do navegador
//Para isso temos duas formas também, veja:
// Voltar a página com JS
window.history.back()
window.history.go(-1)
