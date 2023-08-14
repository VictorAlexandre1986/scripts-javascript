// seleciona elemento
let el = document.getElementById('box');
// utiliza método
let elCoordenadas = el.getBoundingClientRect();
// verificar as propriedades com as coord
console.log(elCoordenadas);

if(elCoordenadas.x===30){
    //Faça algo
}