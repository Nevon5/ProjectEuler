function specialPythagoreanTriplet(sumOfabc) {
    for (var a = 1; a < sumOfabc/3; a++) {
        for (var b = a+1; b < sumOfabc/2; b++) {
            var c = sumOfabc - a - b;
            if (a*a + b*b === c*c) {
                return a*b*c;
            }
        }
    }
}