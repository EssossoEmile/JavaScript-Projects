// Global variable
let userName = "Emile";

// Function with local variable and an if statement
function checkAge() {
  // Local variable
  let age = 17;

  // If statement checks if age is over 18
  if (age >= 18) {
    document.getElementById("ageResult").innerHTML = userName + ", you are an adult.";
  } else {
    document.getElementById("ageResult").innerHTML = userName + ", you are underage.";
  }
}

// Function with an intentional error and console.log for debugging
function brokenFunction() {
  try {
    let x = 10;
    // Intentional error: misspelled variable name ("x" instead of "y")
    console.log("Before error");
    let result = x + y; // 'y' is not defined
    console.log("This won't be printed, result is: " + result);
  } catch (error) {
    console.log("⚠️ Error caught in brokenFunction: ", error.message);
  }
}

// Time_function as outlined in most JS lessons
function Time_function() {
  let time = new Date().getHours(); // Get the current hour (0–23)
  let reply;

  if (time < 12) {
    reply = "It is morning time.";
  } else if (time >= 12 && time < 18) {
    reply = "It is afternoon.";
  } else {
    reply = "It is evening time.";
  }

  document.getElementById("timeMessage").innerHTML = reply;
}
