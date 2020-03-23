function multiplesOf3and5(number) {
  var sum = 0;

  for (var i = 3; i < number; i += 3) {
    if (i % 5 !== 0) {
      sum += i;
    }
  }
  for (var i = 5; i < number; i += 5) {
    sum += i;
  }

  return sum;
}

multiplesOf3and5(1000);
