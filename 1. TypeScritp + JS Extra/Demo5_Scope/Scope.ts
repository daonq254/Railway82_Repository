let myName = "daonq"; // Global scope
//
//
//
console.log(`MyName: ${myName}`);

function a() {
  console.log(`a: ${myName}`);
  let x = 10; // Local Scope
  console.log(`x: ${x}`);
}

// console.log(`x: ${x}`);

function b() {
  console.log(`b: ${myName}`);
  //   console.log(`x: ${x}`);
}
