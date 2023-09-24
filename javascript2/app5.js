//ele in array

function findMax(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  var numbers = [12, 45, 9, 27, 6, 88, 42];
  var maximum = findMax(numbers);
  console.log("The maximum element in the array is: " + maximum);
  