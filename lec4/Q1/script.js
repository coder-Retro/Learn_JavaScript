// Write A function to calculate Avg of array

// Solution Function
function avg(arr) {
    if(!arr.length) return 0;
    let sum=0;
    for(let val of arr) sum+=val;
    return sum/arr.length;
}

// Given Array
const Marks = [85, 97, 44, 37, 76, 60];

// Output
console.log("Marks:", Marks);
console.log(`avg(Marks): ${avg(Marks)}`);