// Ternary operator function that checks if height is tall enough to ride
function Ride_Function() {
  let Height = document.getElementById("Height").value;

  // Ternary operator: checks if Height < 52
  let Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

  // Display result in the paragraph with ID "Ride"
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Constructor function using 'this' and 'new'
function Vehicle(Make, Model, Year, Color) {
  this.Make = Make;
  this.Model = Model;
  this.Year = Year;
  this.Color = Color;
}

// Function that uses user input to create a new Vehicle object
// and display the result in the HTML
function CreateVehicle() {
  // Get values from input fields
  let make = document.getElementById("Make").value;
  let model = document.getElementById("Model").value;
  let year = document.getElementById("Year").value;
  let color = document.getElementById("Color").value;

  // Create a new Vehicle object
  let myCar = new Vehicle(make, model, year, color);

  // Display the car information
  document.getElementById("Vehicle_Info").innerHTML =
    "You drive a " + myCar.Color + " " + myCar.Year + " " + myCar.Make + " " + myCar.Model + ".";
}

// Nested function example: counts from 0 and increments once inside an inner function
function Nested_Function() {
  document.getElementById("Nested_Result").innerHTML = Count();

  function Count() {
    let StartingPoint = 0;

    // Inner function to increment the count
    function PlusOne() {
      StartingPoint += 1;
    }

    PlusOne(); // Call the nested function
    return StartingPoint; // Return the result
  }
}
