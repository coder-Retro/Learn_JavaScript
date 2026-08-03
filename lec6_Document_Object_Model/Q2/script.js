// Add Unique text to elements with class name "box".

const boxes = document.querySelectorAll(".box");

const str = [];

for(let i=0;i<boxes.length;i++) {
    str[i] = prompt(`Append text for Box${i+1}:`);
    boxes[i].innerText = boxes[i].innerText + " " + str[i];
}