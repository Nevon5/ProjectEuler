function sumSquareDifference(n) {
  var squareOfSum = Math.pow((n/2)*(n+1), 2);
  console.log(squareOfSum);
  var sumOfSquares = 0;
  for (var i = 1; i <= n; i++) {
    sumOfSquares += i*i;
  }
  var diff = squareOfSum - sumOfSquares;
  console.log(diff);
  return diff;
}