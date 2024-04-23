var arrObj = [
    {id: 1, nome: "Matheus"},
  {id: 2, nome: "Pedro"},
  {id: 3, nome: "Maria"}
];

var arr = arrObj.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
});

console.log(arr);