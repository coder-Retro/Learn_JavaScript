/*
There are three categories of operators used in Js.
These are:
1. Arithmatic Operators (used for calculations)
2. Relational Operators (used for conditions)
3. Logical Operators    (used for logics)
Let's take a look at each of them separately.
*/

let a;
let b;

/*
Arithmatic Operators:
These operators include:
*/

console.log("Arithmatic Operators:\n");

console.log("Plus Operator: +");
// 1. + (used to add two variables), example:
a = 2;
b = 3;
let sum = a + b;
console.log("a =", a);
console.log("b =", b);
console.log("a + b =", sum);

console.log("Minus Operator: -");
// 2. - (used to subtract two variables), example:
a = 4;
b = 3;
let diff = a - b;
console.log("a =", a);
console.log("b =", b);
console.log("a - b =", diff);

console.log("Multiplication Operator: *");
// 3. * (used to multiply two variables), example:
a = 2;
b = 5;
let product = a * b;
console.log("a =", a);
console.log("b =", b);
console.log("a * b =", product);

console.log("Division Operator: /");
// 4. * (used to divide two variables), example:
a = 10;
b = 5;
let quotient = a / b;
console.log("a =", a);
console.log("b =", b);
console.log("a / b =", quotient);

console.log("Modulus Operator: %");
// 4. % (used to get the remainder of division two variables), example:
a = 15;
b = 10;
let remainder = a % b;
console.log("a =", a);
console.log("b =", b);
console.log("a % b =", remainder);

/*
Relational Operators:
These operators include:
*/

console.log("\nRelational Operators:\n");

console.log("Less than Operator: <");
a = 1;
b = 3;
console.log("a =", a);
console.log("b =", b);
console.log("a < b =", a < b);

console.log("Less than or Equal to Operator: <=");
a = 5;
b = 5;
console.log("a =", a);
console.log("b =", b);
console.log("a <= b =", a <= b);

console.log("Equal to Operator: ==");
a = 5;
b = 5;
console.log("a =", a);
console.log("b =", b);
console.log("a == b =", a == b);

console.log("Not Equal to Operator: !=");
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a != b =", a != b);

console.log("Equal to and Type Operator: ===");
a = 3;
b = "3";
console.log("a =", a, "... Type of a =", typeof a);
console.log("b =", b, "... Type of b =", typeof b);
console.log("a === b =", a === b);
console.log("a === Number(b) =", a === Number(b));

console.log("Greater than or Equal to Operator: >=");
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a >= b =", a >= b);

console.log("Greater than Operator: >");
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a > b =", a > b);

/*
Logical Operators:
These operators include:
*/

console.log("\nLogical Operators:\n");

console.log("AND Operator: &&");
/*
Used to combine multiple conditions and gives true only if all the
conditions are true. If even one is false then it gives false.
*/
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a != b && a < b =", a != b && a < b);
console.log("a != b && a > b =", a != b && a > b);

console.log("OR Operator: ||");
/*
Used to combine multiple conditions and gives false only if all the
conditions are false. If even one is true then it gives true.
*/
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("a == b || a < b =", a == b || a < b);
console.log("a == b || a > b =", a == b || a > b);

console.log("NOT Operator: !");
/*
Used to invert the condition. Give true is the condition is false
and gives false if the condition is true.
*/
a = 5;
b = 10;
console.log("a =", a);
console.log("b =", b);
console.log("!(a > b) =", !(a > b));
console.log("!(a < b) =", !(a < b));

/*
Conditional Statements:
Conditional statements are used to decide is a code is should be
executed or not, based on the result of a condition. Commonly used
conditional statement in Js is "if-else". Its working is quite
self explanatory once you look at the code.
*/

let age = 18;
console.log("age =", age);

if (age > 0 && age < 18) console.log("Minor");
else if (age >= 18 && age <= 100) console.log("Adult");
else if (age <= 0) console.log("Not Born Yet");
else console.log("Dead");
