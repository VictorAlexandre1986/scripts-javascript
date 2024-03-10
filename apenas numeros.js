function justNumbers(text) {
    var numbers = text.replace(/[^0-9]/g,'');
    return parseInt(numbers);
}
console.log(justNumbers("Ol4 Mund0")); // 40
console.log(justNumbers("3294943ASdasdasdasd23424")); // 329494323424
console.log(justNumbers("Esta Str1ng tem alguns 3483284 números")); // 13483284