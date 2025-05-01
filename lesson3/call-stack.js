// The call stack is a special type of data structure used by many programming
// languages to keep track of function calls. It follows the LIFO (Last In, First Out) principle.

function greet() {
  console.log("Hello");
}

function welcome() {
  greet(); // pushed onto the stack
  console.log("Welcome");
}

welcome(); // first pushed onto the stack

// function recursion() {
//   recursion();
// }

// recursion();

// Call Stack Flow:

// welcome() is called → welcome pushed to stack.
// greet() is called inside welcome() → greet pushed.
// greet() logs "Hello" and returns → greet popped.
// welcome() logs "Welcome" and returns → welcome popped.

let count = 0;

function recursion() {
  count++;
  recursion();
}

try {
  recursion();
} catch (error) {
  console.log("Max stack size is approximately:", count);
}
