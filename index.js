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
// const countStrings = (array) => {
//   if (array.length === 1) return array[0].length;
//   return array[0].length + countStrings(array.slice(1));
// };
// const myArray = ["abcd", "efgh", "ijk", "lm", "no", "p"];
// const ans = countStrings(myArray);
// console.log(ans);

// const even = (array) => {
//   const result = [];
//   if (array[0] % 2 === 0) {
//     result.push(array[0]);
//   }
//   if (array.length === 1) {
//     return result;
//   }
//   return result.concat(even(array.slice(1)));
// };
// Alternatively
// const even = (array, result) => {
//   if (array.length != 0) {
//     if (array[0] % 2 === 0) {
//       result.push(array[0]);
//     }
//     even(array.slice(1), result);
//   }
// };
// const result = [];
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
// const ans = even(myArray, result);
// console.log(result);

// const triangleNumber = (n) => {
//   if (n < 1) return "Less than 1";
//   if (n === 1) return 1;
//   return n + triangleNumber(n - 1);
// };
// const ans = triangleNumber(7);
// console.log(ans);

// const findX = (string, index = 0) => {
//   if (string.length != 0) {
//     if (string[0] === "x") return index;
//     index++;
//     return findX(string.slice(1), index);
//   }
//   return "x not in string";
// };
// const myString = "abcdefghijklmnopqrstuvwxyz";
// const ans = findX(myString);
// console.log(ans);
// const uniquePaths = (m, n) => {
//   if (m == 1 || n == 1) return 1;
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// };
// const ans = uniquePaths(2, 3);
// console.log(ans);
// Dynamic Programming
// const add_until_100 = (array) => {
//   console.log("r");
//   if (array.length == 0) return 0;
//   const upTo100 = add_until_100(array.slice(1));
//   if (array[0] + upTo100 > 100) return upTo100;
//   else return array[0] + upTo100;
// };
// const myArray = [1, 2, 66, 33, 2, 4, 7];

// console.log(add_until_100(myArray));

// const golomb = (n, memo = {}) => {
//   console.log("r");
//   if (n == 1) return 1;
//   if (!memo[n]) {
//     memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
//   }
//   return memo[n];
// };
// console.log(golomb(3));
// unique path with memoziation
// const uniquePaths = (m, n, memo = {}) => {
//   console.log("r");
//   if (m == 1 || n == 1) return 1;
//   if (!memo[[m, n]])
//     memo[[m, n]] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
//   return memo[[m, n]];
// };
// console.log(uniquePaths(4, 4));
//Partition

// const myArray = [0, 5, 2, 2, 6, 30, 44, -2, 11, 1, 6, 3];
// console.log(partition(myArray));

// const qs(arr){
//     const quickSort =(L,R)=>{
//         if R-L <= 0 return
//         const pivotIndex =
//     }
//     const partition = (arr) => {
//         let L = 0;
//         let R = arr.length - 2;
//         const pivot = arr[arr.length - 1];
//         let shouldRun = true;
//         while (shouldRun) {
//           while (arr[L] < pivot) L++;
//           while (arr[R] > pivot) R--;
//           if (L >= R) break;
//           else {
//             const temp = arr[L];
//             arr[L] = arr[R];
//             arr[R] = temp;
//             L++;
//           }
//         }
//         arr[arr.length - 1] = arr[L];
//         arr[L] = pivot;
//         return arr;
//       };
// }

class SortableArray {
  constructor(array) {
    this.array = array;
  }
  partition(leftPointer, rightPointer) {
    const pivotIndex = rightPointer;
    const pivot = this.array[pivotIndex];
    let shouldRun = true;
    rightPointer--;
    while (shouldRun) {
      while (this.array[leftPointer] < pivot) leftPointer++;
      while (this.array[rightPointer] > pivot) rightPointer--;
      if (leftPointer >= rightPointer) shouldRun = false;
      else {
        const temp = this.array[leftPointer];
        this.array[leftPointer] = this.array[rightPointer];
        this.array[rightPointer] = temp;
      }
    }
    this.array[pivotIndex] = this.array[leftPointer];
    this.array[leftPointer] = pivot;
    return leftPointer;
  }
  quickSort(leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) return;
    const pivotIndex = this.partition(leftIndex, rightIndex);
    this.quickSort(leftIndex, pivotIndex - 1);
    this.quickSort(pivotIndex + 1, rightIndex);
  }
  quickSelect(kthLowestValue, leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) return this.array[leftIndex];
    const pivotIndex = this.partition(leftIndex, rightIndex);
    if (kthLowestValue < pivotIndex) {
      this.quickSelect(kthLowestValue, leftIndex, pivotIndex - 1);
    } else if (kthLowestValue > pivotIndex) {
      this.quickSelect(kthLowestValue, pivotIndex + 1, rightIndex);
    } else return this.array[pivotIndex];
  }
}
//Exercises
//1.Given an array return the greatest
const returnLargestProduct = (arr) => {
  const sort = new SortableArray(arr);
  sort.quickSort(0, arr.length - 1);
  return (
    sort.array[arr.length - 1] *
    sort.array[arr.length - 2] *
    sort.array[arr.length - 3]
  );
};
console.log(returnLargestProduct([6, 2, 9, 3, 1, 7]));
//2. Find missing number given an array of numbers
// Solution you sort the array and the numbers will be arranged then you loop through the array and compare the index number with the array value
// any number that doesnt match is the missing number, this is assuming the array contains numbers from 0-N
const findMissingNumber = (arr) => {
  const x = new SortableArray(arr);
  x.quickSort(0, arr.length - 1); // sorted
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (i !== x.array[i]) return `${i} is missing`;
  }
};
console.log(findMissingNumber([9, 2, 3, 5, 1, 7, 0]));
//3.Find greatest number within a given array
//Solution write 3 different implementations, one is to use a nested for loop take a number and compare it with every other number in the array
// sort the array and return the largest number from the index
// use selection sort
const findLargestNumber = (arr) => {
  //This is O(N)
  // let largestNumberSoFar = arr[0];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largestNumberSoFar) largestNumberSoFar = arr[i];
  // }
  // return largestNumberSoFar;
  //This is O(N) also
  // const x = new SortableArray(arr);
  // x.quickSelect(arr.length - 1, 0, arr.length - 1);
  // console.log(x.array);
  // return x.array[arr.length - 1];
  //This is O(NlogN)
  // const x = new SortableArray(arr);
  // x.quickSort(0, arr.length - 1);
  // return x.array[arr.length - 1];
};
console.log(findLargestNumber([20, 30, 1, 400, 22, 76, 10, 8, 90, 39, 33, 0]));
