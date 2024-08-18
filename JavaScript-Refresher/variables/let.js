// Block Scope: Variables declared with let are block-scoped,
// meaning they are only accessible within the block (e.g., within {}) they are declared in.



// No Hoisting: let declarations are not hoisted. 
// They are in a "temporal dead zone" from the start of the block until the declaration is encountered.

function example() {
  console.log(y); //  ReferenceError: Cannot access 'y' before initialization
  let y = 20;
  console.log(y); // output : 20
}

