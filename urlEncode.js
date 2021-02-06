const urlEncode = function (text) {
  // Put your solution here

  //initialize an empty array to store the strings that's converted to array
  // let spaceFilter = x === ' ' ? x = "20%" : x;//initialize string for URL 

  // for (let i=0; i<text.length; i++){
  //   arr.push (text.charAt(i)); //convert the string into an array by push every letter in the array
  //   if(arr[i]===' '){ //if the value of a particular index in the array eqauls space, convert that value to 20%
  //     arr[i]='20%';
  //   }
  // }
  let arr = text.split("")
  const result = arr.map(function (x) {
    if (x === " ") {
      x = "20%"
    }
    return x;
  });

  // str = arr.join(''); //convert the array back to a string
  return result.join("");

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));