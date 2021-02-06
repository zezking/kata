function checkAir(samples, threshold) {
  let counter = 0; //initializa to count how many days are dirty
  let pollution = 0;//initializa to count the percentage of pollution days
  pollution = (samples.filter((v) => (v === 'dirty')).length) / (samples.length);
  //find the number of times that dirty has appeared in the array and divided by the total number of days
  if (pollution > threshold) { //return Polluted if the pollution is higher than the threshold 
    return 'Polluted';
  } else {
    return 'Clean';
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))