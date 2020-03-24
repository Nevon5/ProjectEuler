function largestPrimeFactor(number) {
  var dividedNumber = number;
  var productOfFactors = 1;
  var largestPrime = 1;
  // Divide by 2 as much as possible
  while (dividedNumber % 2 == 0) {
    dividedNumber /= 2;
    productOfFactors *= 2;
    largestPrime = 2;
    console.log(dividedNumber);
  }
  // Divide by odd numbers as much as possible, starting with 3
  for (var i = 3; i*i < dividedNumber; i += 2) {
    while (dividedNumber % i == 0) {
      dividedNumber /= i;
      productOfFactors *= i;
      largestPrime = i;
      console.log(i);
    }
  }
  if (largestPrime < dividedNumber) {
    console.log(dividedNumber);
    largestPrime = dividedNumber;
  }
  console.log("Largest prime factor of " + number + " is " + largestPrime);
  return largestPrime;
}