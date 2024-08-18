// Block Scope: Similar to let, const is block-scoped.

// Constant Values: Variables declared with const must be initialized at the time of declaration and cannot be reassigned.
//  However, if the const variable holds an object or array, its contents (i.e., properties or elements) can still be modified.

function example() {
   const z = 30;
   z = 40 // TypeError: Assignment to constant variable

   const obj = {key:'value'};
   obj.key = 'newvalue'; // Allowed
   console.log(obj); // output: {key: 'newVlaue'}
}