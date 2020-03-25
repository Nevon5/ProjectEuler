function isPalindrome(n) {
  var nrStr = n.toString();
  var nrToCheck = Math.floor(nrStr.length / 2);
  for (var i = 0; i < nrToCheck; i++) {
    if (nrStr[i] !== nrStr[nrStr.length - 1 - i]) {
      return false;
    }
  }
  console.log("Found palindrome " + n);
  return true;
}

function largestPalindromeProduct(digits) {
  var smallestProduct = Math.pow(10, digits - 1);
  var largestProduct = smallestProduct * 10 - 1;
  console.log("=== " + digits + " digits ===")
  var largestPalindromeFound = 0;

  for (var i = largestProduct; i > smallestProduct; i--) {
    if (i*i < largestPalindromeFound) {
      break;
    }
    for (var j = i; j > smallestProduct; j--) {
      var product = i * j;
      if (product < largestPalindromeFound) {
        break;
      }
      if (isPalindrome(product)) {
        largestPalindromeFound = Math.max(product, largestPalindromeFound);
      }
    }
  }
  console.log("Largest palindrome found was " + largestPalindromeFound + "\n");
  return largestPalindromeFound;
}