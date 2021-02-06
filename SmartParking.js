function whereCanIPark(spots, vehicle) {
  // Code here!
  let pos = []; //initialize an array to store the parking spot

  for (let i = 0; i < spots.length; i++) {
    if ((pos.length < 2)) { //exit if the first x and y value is found 
      for (let j = 0; j < spots[i].length; j++) { //going through the second dimension array to look for the right spot
        if (vehicle === 'regular' && spots[i][j] === "R") {
          pos.push(j, i);
        }
        else if (vehicle === 'small' && (spots[i][j] === "R" || spots[i][j] === "S")) {
          pos.push(j, i);
        } else if (vehicle === 'motorcycle' && (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")) {
          pos.push(j, i);
        }
      }
    }
  }

  if (pos.length > 0) { //if there is no available spot found, return false other wise return x and y value
    return pos;
  } else {
    return false;
  }

}
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))