function testandoCallback(a, b, callback) {
    console.log(a + b);
    callback();
}
testandoCallback(1,2, function() {
    console.log('soma finalizada!')
});