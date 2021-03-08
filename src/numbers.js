//TODO list examples of Numbers variables
/**
 * Declaring a number variable is the same a string value except we do not need the '' when assigning a value.
 * We can write any math operator on the same line of declaring a number variable.
 * We can use grouping operator () to carry out a specific equation.
 */

// Declaring a num variable with the value 503
let num = 503
// Print it
console.log(num)

// We can use any of the math operators will declaring a number variable. Use the Subtraction - operator.
num = 503 - 3
// Print it 
console.log(num)

// Using the Addition  + operator 
num = 500 + 3
// Print it 
console.log(num)

// Using the Division / operator
num = 8 / 2
// Print it 
console.log(num)

// Using the Multiplication * operator
num = 5 * 100
// Print it 
console.log(num)

// Using the Remainder % Operator
num = 9 % 2
// Print it 
console.log(num)

// Using the Exponentiation ** operator
num = 2 ** 3
// Print it 
console.log(num)

// The example below is from MDN 
const a = 1;
const b = 2;
const c = 3;

// default precedence
console.log(a + b * c)    // 7

// evaluated by default like this
console.log(a + (b * c))   // 7

// now overriding precedence
// addition before multiplication
console.log((a + b) * c)   // 9

// which is equivalent to
console.log(a * c + b * c) // 9
