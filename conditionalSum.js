function conditionalSum(values, condition) {
  let arr = [];
  let result = 0;
  const sum = (x, y) => x + y;
  const largerThanFive = (x) => x > 5;
  const index = (x, y, i) => x + y + i;
  // if (values === 0) {)
  //   return 0;
  // } else if (condition === "even"){
  //   for (let i = 0; i < values.length; i++){
  //     if (values[i] % 2 === 0){
  //       sum = sum + values[i];
  //     }
  //   }
  // } else if (condition === "odd"){
  //   for (let i = 0; i < values.length; i++){
  //     if (values[i] % 2 !== 0){
  //       sum = sum + values[i];
  //     }
  //   }
  // }
  if (condition === "even") {
    arr = values.filter((x) => x % 2 === 0);
    result = arr.reduce(largerThanFive);
  } else {
    arr = values.filter((x) => x % 2 !== 0);
    result = arr.reduce(largerThanFive);
  }

  return result;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([13, 88, 12, 44, 99], "odd"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
