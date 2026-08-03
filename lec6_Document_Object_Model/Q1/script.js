// Append an h2 tag's text

const target = document.querySelector("#target");

const str = prompt("Enter text to append:");

target.innerText = target.innerText + " " + str;