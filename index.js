const merge = (array_1, array_2) => {
  const new_array = [];
  let array_1_pointer = 0;
  let array_2_pointer = 0;
  let count = 0;
  // Run the loop until we've reached end of both arrays:
  while (array_1_pointer < array_1.length || array_2_pointer < array_2.length) {
    count++;
    // If we already reached the end of the first array,
    //  add item from second array:
    if (!array_1[array_1_pointer]) {
      new_array.push(array_2[array_2_pointer]);
      array_2_pointer += 1;
    }
    // If we already reached the end of the second array,
    // add item from first array:
    else if (!array_2[array_2_pointer]) {
      new_array.push(array_1[array_1_pointer]);
      array_1_pointer += 1;
    }
    // If the current number in first array is less than current
    //  number in second array, add from first array:
    else if (array_1[array_1_pointer] < array_2[array_2_pointer]) {
      new_array.push(array_1[array_1_pointer]);
      array_1_pointer += 1;
    }
    //  If the current number in second array is less than or equal
    // to current number in first array, add from second array:
    else {
      new_array.push(array_2[array_2_pointer]);
      array_2_pointer += 1;
    }
  }
  console.log(count);
  return new_array;
};
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5, 6, 7, 8];
const ans = merge(arr1, arr2);
console.log(ans);
