// Function to concatenate two strings using concat()
function concatStrings() {
  let str1 = "Hello";
  let str2 = "World";
  let result = str1.concat(" ", str2); // Concatenate with a space
  document.getElementById("concatResult").innerText = "Concat result: " + result;
}

// Function to slice part of a string using slice()
function sliceString() {
  let text = "JavaScript is fun!";
  // Extract "Script" from the string (index 4 to 10)
  let result = text.slice(4, 10);
  document.getElementById("sliceResult").innerText = "Slice result: " + result;
}

// Function to convert a number to a string using toString()
function numberToString() {
  let num = 12345;
  let result = num.toString(); // Convert number to string
  document.getElementById("toStringResult").innerText = 
    "toString() result type: " + typeof result + ", value: " + result;
}

// Function to format a number using toPrecision()
function numberToPrecision() {
  let num = 123.456789;
  let result = num.toPrecision(5); // Format number to 5 significant digits
  document.getElementById("toPrecisionResult").innerText = 
    "toPrecision(5) result: " + result;
}
