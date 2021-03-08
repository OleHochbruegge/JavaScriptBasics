// TODO Work with JS strings
/*
1- A Variable is a way to store a value and access it later in the program.
2- let: is a reserved keyword in JavaScript. 
 */

// JavaScript syntax for declaring variables.
let firstName = 'Ali'

// We are going to print it in the Terminal by referencing the variable. 
console.log(firstName)

// Declare a variable last name
let lastName = 'Kahwaji'

/*
Now we can print our full name by using the + operator to concatenate both first and last names.
By that we can combine the two string and store the value of the concatenation in another variable.
*/

let fullName = firstName + lastName
// Print it
console.log(fullName)

// To have space between the two names you can add a string by adding ' ' with space and a second + operator.
fullName = firstName + ' ' + lastName //Identifier 'fullName' has already been declared
// Print it
console.log(fullName)

/** Challenge 
 * Declare 3 variables street, city, country
 * Assign a value to each variable.
 * Use the + operator to concatenate the 3 variables and store them in a new variable with the name address.
 * Print address.
 * Write your answer below starting from line 37
 * */
