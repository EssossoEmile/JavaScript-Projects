// Create a dictionary (JavaScript object) with some key-value pairs
let person = {
  name: "Alice",
  age: 30,
  city: "Toronto"
};

// Function to show a key-value pair, but delete the key before showing
function showKeyValue() {
  // Delete the 'city' key from the dictionary
  delete person.city;

  // Attempt to access the deleted key
  let value = person.city;

  // Display the result in the HTML element
  document.getElementById("output").innerText = 
    "Value of 'city' after deletion: " + value;

  // If the key is deleted, value will be 'undefined'
}
