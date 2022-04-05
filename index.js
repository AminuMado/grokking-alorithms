// Selection Sort

// This is a faster alogrithm compared to bubble sort that passes through every item find the smallest item and place it in a new array
// this usually uses a nested for loop for operation
// steps
// Youd have to find the smallest or largest item during a pass
// The trick is to place an item and not make a check with said again
// eg myArray = [3,7,2,1,6,4,5]
// you start at index 0 and find the smallest available number
// after the loop you start at index 1 and find the smallest available number
// const sortArray = [];
// for (let i = 0; i < array.length; i++) {
//   const index = i;
//   const value = array[i];
//

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
};
const myArray = [5, 4, 3, 2, 1];
const smallest = selectionSort(myArray);
