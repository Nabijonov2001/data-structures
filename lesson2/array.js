// 1-Reading books
// 2-Watching movies
// 3-Playing games

const todoList = [
  { id: 1, task: "Reading books", completed: false },
  { id: 2, task: "Watching movies", completed: false },
  { id: 3, task: "Playing games", completed: false },
];

function getFirst(arr) {
  return arr[0];
} // O(1) - Constant time

function getLast(arr) {
  return arr[arr.length - 1];
} // O(1) - Constant time

function getAt(arr, index) {
  return arr[index];
} // O(1) - Constant time

function addFirst(arr, value) {
  const newArr = [];
  newArr[0] = value;
  for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  return newArr;
} // O(n) - Linear time

function addLast(arr, value) {
  arr[arr.length + 1] = value;

  return arr;
} //O(n)

function addAt(arr, index, value) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArr[i] = value;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
} // O(n) - Linear time

function lengthOfArr(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}
