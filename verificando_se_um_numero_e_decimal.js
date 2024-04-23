function isFloat(x) {
    if(!isNaN(x)) {
        if(parseInt(x) != parseFloat(x)) {
                return true;
      }
    }   
    
    return false;
}
console.log(isFloat("teste")); // false
console.log(isFloat(5)); // false
console.log(isFloat("999")); // false
console.log(isFloat("12.9")); // true
console.log(isFloat(53.4)); // true