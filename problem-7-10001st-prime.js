// Check if the number is divisible by any of the previous prime numbers (except 1)
function isPrimeNumber(previousPrimeNumbers, number) {
  for (var i = 0; i < previousPrimeNumbers.length; i++) {
    var primeNumber = previousPrimeNumbers[i];
    if (number % primeNumber === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  var primeNumbers = [];
  var i = 2;
  while (primeNumbers.length < n) {
    if (isPrimeNumber(primeNumbers, i)) {
      primeNumbers.push(i);
      console.log("Found prime number " + i);
    }
    i++;
  }
  console.log("Prime numbers found: " + primeNumbers);
  return primeNumbers.pop();
}