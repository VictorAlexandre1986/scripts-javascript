function isEmpty(obj) {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  console.log(isEmpty({})); // true
  console.log(isEmpty({nome: "Victor"})); // false

  //Outra solução
  function isEmpty2(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  console.log(isEmpty2({})); // true
  console.log(isEmpty2({nome: "Victor"})); // false