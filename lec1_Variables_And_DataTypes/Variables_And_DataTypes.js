/*
Basic Data Types:
There are three main datatypes in Js, these are:
1. number  (It can store numeric values)
2. string  (It can store lettes, words and sentences)
3. boolean (It can have two values. true or false)
We can make variables using these data types. Let's
learn how to declare a variable first. There are three
ways to do this:
*/

// Numbers:
var x = 10; // Outdated now, not recommended to use
console.log("x =", x);
let y = 20; // Modern standard, value can be changed later
console.log("y =", y);
const z = 30; // Modern standard, value cant be changed now
console.log("z =", z);

/*
Note:
Use let when you want to change value later
Use const when you want to fix the value
*/

// Strings:
// String are declared using double quotes
let name1 = "Suhana"; // name1 = newValue can be used to change the value
console.log("name1 =", name1);
const name2 = "Wareesha"; // name2 = newValue will give error now, if tried
console.log("name2 =", name2);

// Boolean:
let isAlive = true; // Value can be changed from True to False and False to True
console.log("isAlive =", isAlive);
const isDead = true; // Value is fixed at True. isDead = false will give error.
console.log("isDead =", isDead);

/*
In Short:
let is changable.
const is constant.
Also, data type of a variable can be checked using "typeof" like: 
*/

console.log("Type of x =", typeof x);
console.log("Type of y =", typeof y);
console.log("Type of z =", typeof z);
console.log("Type of name1 =", typeof name1);
console.log("Type of name2 =", typeof name2);
console.log("Type of isAlive =", typeof isAlive);
console.log("Type of isDead =", typeof isDead);

/*
Advanced Data Types:
There is also an advanced data type in Js called object.
Object is a bit complex to explain but for starting, let's
say that we can store multiple data types in a single object.
let's conside a student. What is going to be a student's data?
Name, age, rollNo. So now let's see how to create an Object.
*/

const student = {
  name: "Suhana",
  age: 19,
  rollNo: 1000,
};

/*
This is how we created an object called student. The name is Suhana.
Her age is 19. Her rollNo is 1000. We can also print the object using
console.log(student);
*/

console.log("student =", student);
console.log("Type of student =", typeof student);

/*
We can also print specific value from an object using the key of that value. Like in our student object, the key of "Suhana" is name, the key of 19 is age and the key of 1000 is rollNo
*/

console.log(student["name"]); // prints Suhana
console.log(student["age"]); // prints 19
console.log(student["rollNo"]); // prints 1000

// Note: key is enclosed in double quotes inside the square brackets
