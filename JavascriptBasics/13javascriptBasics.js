// Array

let countries = ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan"];

let states = new Array(
  "West Bengal",
  "Tamilnadu",
  "Andhrapradesh",
  "Telengana",
  "Kerala"
);

// console.log(countries[0]);
// console.log(states[3]);
// console.log(countries.length)

countries[0] = "Punjab";

// console.log(countries);

countries.pop()

console.log(countries);

countries.unshift("newValue");

console.log(countries);

console.log(countries.indexOf("Nepal"));