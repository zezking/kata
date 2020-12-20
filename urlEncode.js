const urlEncode = function(text) {
  // Put your solution here
  
  let arr=[]; //initialize an empty array to store the strings that's converted to array
  let str='';//initialize string for URL 
  
  for (let i=0; i<text.length; i++){
    arr.push (text.charAt(i)); //
    if(arr[i]===' '){
      arr[i]='20%';
    }
  }

  str=arr.join('');
  return str;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));