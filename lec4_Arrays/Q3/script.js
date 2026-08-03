// Given Array
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Initial Array
console.log("Initial Array:");
console.log(companies);

// Remove first company
companies.shift();
console.log("Removed First Company:");
console.log(companies);

// Replace "Uber" With "Ola"
companies.splice(1,1,"Ola");
console.log("Replace \"Uber\" with \"Ola\":");
console.log(companies);

// Add Amazon at the end
companies.push("Amazon");
console.log("Added \"Amazon\" at the end:");
console.log(companies);