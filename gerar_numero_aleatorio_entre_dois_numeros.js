function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
  }
  console.log(randomNumberInterval(10, 20)); // 8
  console.log(randomNumberInterval(5000, 9999)); // 3218