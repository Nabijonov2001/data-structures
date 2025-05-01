// Recursion

// Recursion is a programming technique where a function calls itself to solve a problem.
// It is often used to solve problems that can be broken down into smaller, similar problems.

// It has two main components:
// 1. Base Case: The condition under which the recursion stops.
// 2. Recursive Case: The part of the function that calls itself with a modified argument.

function countDown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  } // base case

  console.log(n);
  countDown(n - 1); // recursive case
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } // base case

  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5));

// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...
function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

// with recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } // base case

  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

// https://leetcode.com/problems/fibonacci-number/description/
