function fibonacci(first, second, sum, n) {
  var fibo = first + second;
  if (n < fibo) {
    return sum;
  }
  if (fibo % 2 == 0) {
    sum += fibo;
  }  
  return fibonacci(second, fibo, sum, n);
}

function fiboEvenSum(n) {
  return fibonacci(1, 2, 2, n);
}