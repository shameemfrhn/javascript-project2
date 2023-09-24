// faran to celc
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  var celsius = 25; 
  var fahrenheit = celsiusToFahrenheit(celsius);
  console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
  