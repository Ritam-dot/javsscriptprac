// For loop

var states = ["West Bengal", "Assam", "Rajasthan", "Gujrat", "Kerala"];

// for(let i =0; i < states.length; i++){
//     console.log(states[i]);
// }

// While loop 

let i =0;

// while ( i < states.length) {
//     console.log(states[i]);
//     i++
// }

// Do While loop

// do{ console.log(states[i]);
//     i++}while( i < states.length);

// For each loop

// states.forEach((i) => (console.log(i)));

// For of loop

// for(const n of states){
//     console.log(n);
// }

var userDetails = {
    firstname : "Ritam" ,
    lastname : "Dutta" ,
    email : "ritamdutta04@gmail.com"
};

for(const n in userDetails){
    console.log(`The key is ${n} : The value is ${userDetails[n]}`);
};