// Function Scope: Variables declared with var are function-scoped. 
// They are accessible within the function they are declared in, or globally if declared outside a function.



// Hoisting: var declarations are hoisted to the top of their scope.
//  This means that the variable can be used before it's declared, but it will be undefined until the declaration is executed.

function example() {
  console.log(x); // output:undefined
  var x = 10;
  console.log(x) // output : 10
}


