// Call Back Function
const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val);
});

// Map
const squares = arr.map((val) => {
    return val**2;
});

console.log(squares);

// Filter
const odds = arr.filter((val) => {
    return val%2;
});

console.log(odds);

// Reduce
const nums = [1, 2, 3, 5, 4];
const sum = nums.reduce((prev, curr) => {
    return (prev>curr)?prev:curr;
});
console.log(sum);