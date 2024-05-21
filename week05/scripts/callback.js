function calculate(a, b, callback) {
    callback(a + b);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }

//   Call a function named calculate and pass it the arguments to 
//   support the console output of the following equation: 2 + 3. 
//   You need to pass three arguments to the calculate function.

calculate(2, 3, displayResult);

