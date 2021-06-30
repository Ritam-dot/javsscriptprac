// Hoisting

// Function declearation are scanned and made available
// Veriable declearation are scanned and made undefined

tipper("5");

function tipper(a) {
  let bill = parseInt(a);
  console.log(bill + 5);
}

let bigTipper = function (a) {
  let bill = parseInt(a);
  console.log(bill + 15);
};
bigTipper("200");

console.log(surname);
var surname = "Dutta";

function saySurname() {
  var surname = "Mr. Dutta";
  console.log(surname);
}

saySurname()

console.log(surname);