
const numberOfVowels = function (data) {
  // Put your solution here
  let count = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (data[i] === vowel[j]) {
        count++;
      }
    }
  }
  return count;
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("how about this"));
console.log(numberOfVowels("asdfasdfadfadf"));

// second solution
// const numberOfVowels = function (data) {
//   let count = 0;
//   let vowel = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < data.length; i++) {
//     if (vowel.indexOf(data[i]) >= 0) {
//       count++;
//     }
//   }
// }