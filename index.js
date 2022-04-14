// const merge = (array_1, array_2) => {
//   const new_array = [];
//   let array_1_pointer = 0;
//   let array_2_pointer = 0;
//   let count = 0;
//   // Run the loop until we've reached end of both arrays:
//   while (array_1_pointer < array_1.length || array_2_pointer < array_2.length) {
//     count++;
//     // If we already reached the end of the first array,
//     //  add item from second array:
//     if (!array_1[array_1_pointer]) {
//       new_array.push(array_2[array_2_pointer]);
//       array_2_pointer += 1;
//     }
//     // If we already reached the end of the second array,
//     // add item from first array:
//     else if (!array_2[array_2_pointer]) {
//       new_array.push(array_1[array_1_pointer]);
//       array_1_pointer += 1;
//     }
//     // If the current number in first array is less than current
//     //  number in second array, add from first array:
//     else if (array_1[array_1_pointer] < array_2[array_2_pointer]) {
//       new_array.push(array_1[array_1_pointer]);
//       array_1_pointer += 1;
//     }
//     //  If the current number in second array is less than or equal
//     // to current number in first array, add from second array:
//     else {
//       new_array.push(array_2[array_2_pointer]);
//       array_2_pointer += 1;
//     }
//   }
//   console.log(count);
//   return new_array;
// };
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5, 6, 7, 8];
// const ans = merge(arr1, arr2);
// console.log(ans);

// const intersection = (arr1, arr2) => {
//   let hashtable = {};

//   arr1.forEach((element) => {
//     hashtable[element] = true;
//   });
//   let result = arr2.filter((element) => {
//     if (hashtable[element]) {
//       return element;
//     }
//   });
//   return result;
// };
// const ans = intersection(arr1, arr2);
// console.log(ans);

// const duplicate = (arr) => {
//   let hashtable = {};
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (!hashtable[arr[i]]) {
//   //     hashtable[arr[i]] = true;
//   //   } else return arr[i];
//   // }
//   for (element of arr) {
//     if (!hashtable[element]) {
//       hashtable[element] = true;
//     } else return element;
//   }
//   console.log(hashtable);
// };
// const stringArray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// const ans = duplicate(stringArray);
// console.log(ans);

// const missingLetter = (string) => {
//   const hashtable = {
//     a: true,
//     b: true,
//     c: true,
//     d: true,
//     e: true,
//     f: true,
//     g: true,
//     h: true,
//     i: true,
//     j: true,
//     k: true,
//     l: true,
//     m: true,
//     n: true,
//     o: true,
//     p: true,
//     q: true,
//     r: true,
//     s: true,
//     t: true,
//     u: true,
//     v: true,
//     w: true,
//     x: true,
//     y: true,
//     z: true,
//   };
//   let strings = string.toLowerCase().replaceAll(" ", "");
//   for (value of strings) {
//     delete hashtable[value];
//   }
//   const answer = Object.keys(hashtable);
//   console.log(answer[0]);
// };
// missingLetter("the quick brown box jumps over a lazy dog");

//Book Solutions
// function getIntersection(array1, array2) {
//   let intersection = [];
//   let hashTable = {};
//   for (let i = 0; i < array1.length; i++) {
//     hashTable[array1[i]] = true;
//   }
//   for (let j = 0; j < array2.length; j++) {
//     if (hashTable[array2[j]]) {
//       intersection.push(array2[j]);
//     }
//   }
//   return intersection;
// }
// function findDuplicate(array) {
//   let hashTable = {};
//   for (let i = 0; i < array.length; i++) {
//     if (hashTable[array[i]]) {
//       return array[i];
//     } else {
//       hashTable[array[i]] = true;
//     }
//   }
// }
// function findMissingLetter(string) {
//   // Store all encountered letters in hash table:
//   let hashTable = {};
//   for (let i = 0; i < string.length; i++) {
//     hashTable[string[i]] = true;
//   }
//   // Report first unseen letter:
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < alphabet.length; i++) {
//     if (!hashTable[alphabet[i]]) {
//       return alphabet[i];
//     }
//   }
// }
// function firstNonDuplicate(string) {
//   let hashTable = {};
//   for (let i = 0; i < string.length; i++) {
//     if (hashTable[string[i]]) {
//       hashTable[string[i]]++;
//     } else {
//       hashTable[string[i]] = 1;
//     }
//   }
//   for (let j = 0; j < string.length; j++) {
//     if (hashTable[string[j]] == 1) {
//       return string[j];
//     }
//   }
// }
//Recursion
// const container = (arr) => {
//   let answer = "";

//   const printNumber = (arr) => {
//     for (value of arr) {
//       if (Array.isArray(value)) {
//         printNumber(value);
//       } else {
//         console.log(value);
//         answer += ` ${value}`;
//       }
//     }
//     return answer;
//   };

//   printNumber(arr);

//   return answer;
// };
// const myArray = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, [11]]]]];
// let ans = container(myArray);
// console.log(ans);

// function doubleArray(array, index = 0) {
//   if (index >= array.length) return;
//   array[index] *= 2;
//   doubleArray(array, index + 1);
// }
// const myArray = [1, 2, 3, 4, 5];
// doubleArray(myArray);
// console.log(myArray);

// Recursion Contd
const countStrings = (array) => {
  if (array.length === 1) return array[0].length;
  return array[0].length + countStrings(array.slice(1));
};
const myArray = ["abcd", "efgh", "ijk", "lm", "no", "p"];
const ans = countStrings(myArray);
console.log(ans);
