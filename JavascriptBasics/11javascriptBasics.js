// Scope chaining

let petname = "Shiro";

console.log(petname);

function sayPetName() {
    
//   let petname = "Shishivanu"
  console.log(`pet name is ${petname}`);

  sayPetNameTwo();
  function sayPetNameTwo() {
      let petname = "kio"
    console.log(`pet name is ${petname}`);
  }
}

sayPetName();
