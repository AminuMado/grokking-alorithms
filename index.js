//Bubble Sort
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const bubbleSort = (array) => {
  const newArray = array;
  let pass = newArray.length - 1;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < pass; i++) {
      if (newArray[i] > newArray[i + 1]) {
        sorted = false;
        const temp = newArray[i + 1];
        newArray[i + 1] = newArray[i];
        newArray[i] = temp;
      }
    }
    pass = pass - 1;
  }

  return newArray;
};

const sorted = bubbleSort(arr);
console.log(sorted);
