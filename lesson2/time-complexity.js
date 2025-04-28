// TIME COMPLEXITY

// Time complexity is a way to analyze how the runtime of an algorithm
// grows as the input size increases. It helps us understand the efficiency of our code.

// Big O Notation is a mathematical notation used to describe the
// upper bound of an algorithm's time complexity.

// Common Time Complexities:

// O(1) - Constant time:
const constantTime = (arr) => {
  return arr[0];
};

function sumTilN(n) {
  return ((1 + n) / 2) * n;
} //O(1)

const a = 1;
const b = 2;
const sum = a + b;
const sum2 = sum + 2; //O(5) = O(1)

// O(n) - Linear time:
const linearTime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

for (let i = 0; i < 100; i++) {
  console.log(i);
}

while (i < 10) {
  while (i < 10) {
    console.log(i);
    i++;
  }
  console.log(i);
  i++;
}

function sumTillN(n) {
  let sum = 0;
  for (let i = 1; i <= n + 1; i++) {
    sum += i;
  }
  return sum;
} // O(n+1) = O(n)

// O(n^2) - Quadratic time:
const quadraticTime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

// O(log n) - Logarithmic time:
const logarithmicTime = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// O(2^n) - Exponential time:
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// O(n log n) - Linearithmic time:

function sumTillHundered() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
} //O(1)

function sumTillN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
} // O(n)
