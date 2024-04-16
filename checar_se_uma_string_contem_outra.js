var str = "Este texto tem algumas palavras";
console.log(str.indexOf("algumas")); // 15
console.log(str.indexOf("teste")); // -1

console.log(str.includes("algumas")); // true
console.log(str.includes("teste")); // false