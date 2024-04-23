var checkBoxes = document.querySelectorAll(".checkbox");
var selecionados = 0;
checkBoxes.forEach(function(el) {
    
  if(el.checked) {
      selecionados++;
  }
  
});
console.log(selecionados);