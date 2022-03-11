// 1. Write a function that returns the sum of any two integers passed as arguments
function addNumbers (x, y) {
  let total = x + y;
  console.log(total);
  return total;
};
addNumbers(50,40);

// 2. Write a function that returns the difference of the second argument from the first
function subtraction (x, y) {
  let difference = x - y;
  console.log(difference);
  return difference;
};
subtraction(50,40);
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function userGreeting(name) {
  const greeting = `Hello, ${name}!`
  console.log (greeting);
  return greeting;
};
userGreeting(`Michael`);

// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplied (x) {
  let times = x*x;
  console.log (times)
  return times;
}
multiplied (10);

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥
function volume(l,w,h) {
  let box = l*w*h;
  console.log (`The dimensions of the box are ${box} cubic meters.`);
  return box;
};
volume (2,5,10)
