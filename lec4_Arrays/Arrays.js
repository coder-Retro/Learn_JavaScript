// Array Declartion & Initialization
const marks = [1,2,3];

// Array Printing
console.log(`Marks: ${marks}\n`);

// Back Insertion
marks.push(4);
console.log("After marks.push(4)\nmarks:", marks, "\n");

// Back Deletion (It Also Returns the deleted Item if needed)
const popped = marks.pop();
console.log("After marks.pop()\nmarks:", marks);
console.log("Returned Value:", popped, "\n");

// Front Insertion
marks.unshift(0);
console.log("After marks.unshift(0)\nmarks:", marks, "\n");

// Front Deletion (It Also Returns the deleted Item if needed)
const shifted = marks.shift();
console.log("After marks.shift()\nmarks:", marks);
console.log("Returned Value:", shifted, "\n");

// Convert To String
console.log("marks.toString():", marks.toString(), "\n");

// Concatenation
const marks2 = [4, 5, 6];
console.log("marks:", marks, "\nmarks2:", marks2);
console.log("marks.concat(marks2):", marks.concat(marks2), "\n");

// Slicing (Returns a subarray)
console.log("marks.slice(1,3): ", marks.slice(1,3), "\n");

// Splicing (Mutates Original Array)
marks.splice(1,2,4,5);
console.log("After marks.splice(1,2,4,5)\nmarks:", marks);