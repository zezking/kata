function conditionalSum (values, condition){
  let sum = 0;
  if (values === 0) {
    return 0;
  } else if (condition === "even"){
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 === 0){
        sum = sum + values[i];
      }
    }
  } else if (condition === "odd"){
    for (let i = 0; i < values.length; i++){
      if (values[i] % 2 !== 0){
        sum = sum + values[i];
      }
    }
  }
return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([13, 88, 12, 44, 99], "odd"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));