const sumLargestNumbers = function (data) {
  data.sort((a, b) => b - a);

  let sum = data[0] + data[1];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
