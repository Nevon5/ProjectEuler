function isEvenlyDivisible(product, n) {
  for (var i = n; i > 1; i--) {
    if (product % i !== 0) {
      return false;
    }
  }
  return true;
}

function smallestMult(n) {
  var smallestProduct = 1;
  for (var i = 2; i <= n; i++) {
    smallestProduct *= i;
  }
  console.log(smallestProduct);
  for (var i = n; i > 1; i--) {
    var productToTest = smallestProduct / i;
    if (isEvenlyDivisible(productToTest, n)) {
      smallestProduct = productToTest;
    }
  }
  console.log("Smallest multiple found: " + smallestProduct);
  return smallestProduct;
}