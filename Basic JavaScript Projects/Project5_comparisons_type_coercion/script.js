// Select the output container in HTML
const output = document.getElementById("output");

// Declare a variable and assign a number
let score = 100;

// Use typeof operator to display the type of the variable
output.innerHTML += `<p>Type of 'score' is: ${typeof score}</p>`;

// Combine a string and a number (type coercion happens here)
let message = "Your score is " + score;
output.innerHTML += `<p>Combined string and number: ${message}</p>`;

// Declare more variables for comparison
let a = 10;
let b = "10"; // string version of a
let c = 20;

// == checks if values are equal (ignores type)
output.innerHTML += `<p>a == b: ${a == b}</p>`; // true

// === checks if values and types are equal
output.innerHTML += `<p>a === b: ${a === b}</p>`; // false

// Greater than and less than
output.innerHTML += `<p>a > 5: ${a > 5}</p>`;   // true
output.innerHTML += `<p>a < 5: ${a < 5}</p>`;   // false

// Logical AND operator
output.innerHTML += `<p>(a == 10 && c == 20): ${a == 10 && c == 20}</p>`; // true

// Logical OR operator
output.innerHTML += `<p>(a == 5 || b == '10'): ${a == 5 || b == '10'}</p>`; // true

// Logical NOT operator
output.innerHTML += `<p>!(a === 10): ${!(a === 10)}</p>`; // false
