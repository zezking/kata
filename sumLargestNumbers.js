const sumLargestNumbers = function (data) {
  // Put your solution here'\
  // let largest = 0; //store the biggest number
  // let secondLargest = 0; //store the second largest number
  // let temp = 0; //temporary number to compare if it's value of an index is biggest or second biggest
  // for (i = 0; i < data.length; i++) {
  //   temp = data[i] 
  //   if (temp > largest) {  // if the value of current index is bigger than the largest number
  //     secondLargest = largest; //the previous largest number becomes the second largest number
  //     largest = temp; //the new temp becomes the new largest number
  //   }
  // }
  // return (largest + secondLargest);

  data.sort((a, b) => b - a);

  let sum = data[0] + data[1]
  return sum;

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));