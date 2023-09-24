//palindrome

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  var testString = "racecar"; 
  var isPalindromic = isPalindrome(testString);
  if (isPalindromic) {
    console.log(testString + " is a palindrome.");
  } else {
    console.log(testString + " is not a palindrome.");
  }
  