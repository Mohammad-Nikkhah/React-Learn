// We use the export keyword to expose the add and subtract functions.
//  This allows other files to import and use these functions.

import {add,subtract} from './math';

const res1 = add(10,20);
const res2 = subtract(15,5);

console.log(`Addition result: ${res1}`);
console.log(`Subtraction result: ${res2}`);