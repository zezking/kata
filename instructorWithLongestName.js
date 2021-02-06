
const instructorWithLongestName = function (instructors) {
  // let maxIndex = 0; //store index 
  // let temp = 0; //initialize and store the length of the name
  // for (let i = 0; i < instructors.length; i++) {
  //   if (temp < instructors[i].name.length) {
  //     temp = instructors[i].name.length; //if the name length is longer than the current length, assign current length to temp and compare until the longest is found
  //     maxIndex = i; //assign index which the longest name is at 
  //   }
  // }
  // return (instructors[maxIndex]); //return the object with index

  instructors.sort((a, b) => b.name.length - a.name.length)

  return instructors[0];

}


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));


console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
