// N Sum and N Product

let n = prompt("Enter n:");
const nums = [];

for(let i=1; i <= n; i++) nums.push(i);

// Calculate Sum
let sum = nums.reduce((prev, curr) => {
    return prev+curr;
});

console.log(sum);

// Calculate Product
let pro = nums.reduce((prev, curr) => {
    return prev*curr;
});

console.log(pro);