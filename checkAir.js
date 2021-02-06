function checkAir(samples, threshold) {
  let counter = 0; //initializa to count how many days are dirty
  let pollution = 0;//initializa to count the percentage of pollution days

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      counter++;  //store how many days are dirty
    }
  }
  pollution = counter / samples.length;  //calculate the percentage of dirty days among 10 days

  if (pollution > threshold) {
    return "Polluted"; //return if the pollution percentage is higher than threshold
  } else {
    return "Clean"; //otherwise return clean
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