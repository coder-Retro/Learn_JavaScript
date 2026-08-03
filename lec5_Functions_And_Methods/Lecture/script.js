// Call Back Function
const arr = [1, 2, 3, 4, 5];


// ForEach (performs a function for each element)
arr.forEach((val) => {
    console.log(val);
});

// Map (returns a new array by performing a function on each element)
const squares = arr.map((val) => {
    return val**2;
});

console.log(squares);

// Filter (returns a new array by using elements that pass a condition)
const odds = arr.filter((val) => {
    return val%2;
});

console.log(odds);

// Reduce (returns a single answer developed from all elements of array)
const max = arr.reduce((prev, curr) => {
    return (prev>curr)?prev:curr;
});

console.log(max);