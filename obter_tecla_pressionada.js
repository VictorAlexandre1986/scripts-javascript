function keyPressed(e){
    e = e || window.event;
    var key = e.keyCode || e.which;
    return String.fromCharCode(key); 
}
document.onkeypress = function(e) {
    console.log(keyPressed(e));
}; 

//------------------------------------------------------------
document.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada:", event.key);
    console.log("Tecla pressionada:", event.keyCode);
  });
document.addEventListener("keyup", function(event) {
    console.log("Tecla pressionada:", event.key);
    console.log("Tecla pressionada:", event.keyCode);
  });

document.addEventListener("keypress", function(event) {
    console.log("Tecla pressionada:", event.key);
    console.log("Tecla pressionada:", event.keyCode);
  });

