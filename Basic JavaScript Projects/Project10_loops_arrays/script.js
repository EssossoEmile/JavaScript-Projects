// Function using a WHILE loop
function countWhile() {
  let i = 1;  // Start count at 1
  let result = "";

  // Keep counting while i <= 5
  while (i <= 5) {
    result += "Count: " + i + "<br>";
    i++;
  }

  document.getElementById("whileOutput").innerHTML = result;
}

// Function using a FOR loop and an array
function listFruits() {
  let fruits = ["Apple", "Banana", "Orange", "Mango"]; // Declare an array
  let result = "";

  // Loop through the array with a for loop
  for (let i = 0; i < fruits.length; i++) {
    result += "Fruit " + (i + 1) + ": " + fruits[i] + "<br>";
  }

  document.getElementById("arrayOutput").innerHTML = result;
}

// Function that creates and uses an object with the 'let' keyword
function showCarDetails() {
  // Create a car object
  let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue"
  };

  // Display object details using dot notation
  let details = "Car: " + car.year + " " + car.color + " " + car.make + " " + car.model;
  document.getElementById("objectOutput").innerText = details;
}
