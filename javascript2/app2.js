//factorial of num

function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  var number = 5; 
  var result = factorial(number);
  console.log("Factorial of " + number + " is " + result);
  