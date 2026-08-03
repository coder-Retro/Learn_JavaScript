// Write A function to apply 10% discount on array of Prices

// Solution Function
function applyDiscounts(prices) {
    for(let i=0; i < prices.length; i++)
        prices[i] = prices[i] * 0.9;
}

// Given Array
const prices = [250, 645, 300, 900, 50];

// Output
console.log("prices      :", prices);
applyDiscounts(prices);
console.log("10% discount:", prices);