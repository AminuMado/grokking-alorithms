// Binary Search
const binarySearch = (target, array) => {
  // This is a sorting algorithm that takes a number to be searched within some array
  // How it works
  // You have an upper and lower band and you continiously eliminate sections of the code youre not using
  // example say you have an array = [1,2,3,4,5,6,7,8,9,10]
  // you wanna play a guessing game, the only rule is you get a hint if youre wrong weather your guess is higher or lower
  // lets say the target number is 8
  // You start at the middle point ie 5
  // 5 is wrong but you get the hint that your guessed number is lower
  // so with that information you can safely discard all numbers lower than 5 so your array of intrest is now
  // [6,7,8,9 10]
  // you take the middle number of the array again which is 8 and you have your answer
  // Steps
  // have a lower boundry and upper boundry
  // get the mid point of the lower and upper boundry
  // check if mid number is equal to target number
  // if less than discard upper boundry
  // if greater than discard lower boundry
  // repeat until convergence
  let lowerBoundry = 0;
  let upperBoundry = array.length - 1;
  let midPoint = Math.floor((lowerBoundry + upperBoundry) / 2);
  while (target !== array[midPoint]) {
    if (target > array[midPoint]) {
      lowerBoundry = midPoint + 1;
      midPoint = Math.floor((lowerBoundry + upperBoundry) / 2);
    } else if (target < array[midPoint]) {
      upperBoundry = midPoint - 1;
      midPoint = Math.floor((lowerBoundry + upperBoundry) / 2);
    }
    console.log(array[midPoint]);
  }
  return array[midPoint];
};
const myArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const answer = binarySearch(14, myArray);
