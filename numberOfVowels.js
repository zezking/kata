
const numberOfVowels = function (data) {
  // Put your solution here
  let count = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];

  for (i of data) {
    for (j of vowel) {
      if (i === j) {
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
