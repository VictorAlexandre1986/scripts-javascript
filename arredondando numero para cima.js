function arredondaDezena(num) {
    return Math.ceil(num / 10) * 10;
  }
  
  console.log(arredondaDezena(12)); // 20
  console.log(arredondaDezena(13.8)); // 20
  console.log(arredondaDezena(24.75)); // 30