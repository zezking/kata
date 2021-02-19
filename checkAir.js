function checkAir(samples, threshold) {
  let counter = 0; //initializa to count how many days are dirty

  dirtyDays = samples.filter((x) => x === "dirty").length; // filter create a new array with the conditionals. here I filtered out only the dirtydays and count it's length to know how many dirty days there are

  return dirtyDays / samples.length > threshold ? "polluted" : "clean";
}

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
