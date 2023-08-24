const numeros = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numeros)]);

// [2, 3, 4, 5, 6, 7, 32]

//ou

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
var array = ['a', 'b', 'b', 'c', 'c'];
var unique = array.filter(unique);
console.log(unique);