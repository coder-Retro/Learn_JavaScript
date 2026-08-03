// Given Array
const marks = [97, 64, 32, 49, 99, 96];

const toppers = marks.filter((val) => {
    return val>=90;
});

console.log("Toppers:", toppers);