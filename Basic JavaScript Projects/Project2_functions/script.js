// This function adds two numbers using the += operator
function addNumbers() {
  // Start with an initial value
  let total = 0;

  // Add the first number (e.g., 5)
  total += 5; // total is now 5

  // Add the second number (e.g., 10)
  total += 10; // total is now 15

  // Display the result in the paragraph with ID "result"
  document.getElementById("result").innerText = "Total: " + total;
}
