const arr = [5, 3, 8, 4, 2, 12, 4, 22, 54];

// // Selection sort

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   return arr;
// } // O(n^2) - Quadratic time

// console.log(selectionSort(arr));
