// Function that adds two numbers using the + operator
function add() {
  let a = 10;
  let b = 5;
  let result = a + b;
  document.getElementById("output").innerText = "Addition result: " + result;
}

// Function that subtracts two numbers using the - operator
function subtract() {
  let a = 10;
  let b = 5;
  let result = a - b;
  document.getElementById("output").innerText = "Subtraction result: " + result;
}

// Function that multiplies two numbers using the * operator
function multiply() {
  let a = 10;
  let b = 5;
  let result = a * b;
  document.getElementById("output").innerText = "Multiplication result: " + result;
}

// Function that finds the remainder using the % operator
function modulus() {
  let a = 10;
  let b = 3;
  let result = a % b;
  document.getElementById("output").innerText = "Modulus result: " + result;
}

// Function that increments a number using the ++ operator
function increment() {
  let a = 5;
  a++; // Increase a by 1
  document.getElementById("output").innerText = "Increment result: " + a;
}

// Function that decrements a number using the -- operator
function decrement() {
  let a = 5;
  a--; // Decrease a by 1
  document.getElementById("output").innerText = "Decrement result: " + a;
}

// Function that uses Math.random() to generate a number between 0 and 100
function generateRandom() {
  let randomNumber = Math.floor(Math.random() * 101); // 0 to 100
  document.getElementById("output").innerText = "Random number: " + randomNumber;
}
