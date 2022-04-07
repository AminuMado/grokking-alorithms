//Insertion Sort
// This is another sorting algorithm that has an alternative approach to sorting from bubble sort and selection sort
// Steps
// As with most sorting algorithms you start with a loop to iterate through all the array
// you select i+1 in the first pass-through (the second cell).
// you make a comparision with the cell preceding it, if the element preceding it is greater you swap them around else you move on to the next pass
// and you loop to the next element
//

const insertionSort = (array) => {
  // for index in range(1, len(array)):
  // temp_value = array[index]
  // position = index - 1
  // while position >= 0:
  // if array[position] > temp_value:
  // array[position + 1] = array[position]
  // position = position - 1

  for (let i = 0; i < array.length - 1; i++) {
    const tempValue = array[i + 1];
    let position = i;

    while (position >= 0) {
      if (array[position] > tempValue) {
        //make the shift of position
        array[position + 1] = array[position];
      } else break;

      position--;
    }
    array[position + 1] = tempValue;
  }
  return array;
};

const myArray = [10, 9, 8, 7, 5, 1, 3, 2, 4, 6];
const sortedArray = insertionSort(myArray);
console.log(sortedArray); //[1,2,3,4,5,6,7,8,9,10]
