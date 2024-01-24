// Create variables to hold the title and note text.
let title; 
let message;

// Assign values to these variables.
title = "Sallings's Special Offers";
message = '100% off!';

// Get the element with an id of title.
const elTitle = document.getElementById('title');
// Replace the content of this element.
elTitle.textContent = title;

// Get the element with an id of note.
const elNote = document.getElementById('note');
// Replace the content of this element.
elNote.innerHTML = message;

const contentContainer = document.getElementById("content");
contentContainer.style.backgroundColor = "orange";
contentContainer.style.width = "250px";

// document.getElementById('note').onclick = function(e) {
//     alert('Element clicked!');
//   };

// document.getElementById('note').onclick = function(e) {
//     if(contentContainer.style.backgroundColor === "orange") {
//         contentContainer.style.backgroundColor = "lightblue";
//     } else {
//         contentContainer.style.backgroundColor = "orange";
//     } 
// };

document.getElementById('note').onclick = function() {
    if(contentContainer.style.backgroundColor === "orange") {
        contentContainer.style.backgroundColor = "lightblue";
        elTitle.textContent = "Thank You joining!"
    } else {
        contentContainer.style.backgroundColor = "orange";
        elTitle.textContent = "Sallings's Special Offers"
    } 
};


  
/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elTitle.innerHTML = title;

innerHTML is used on line 17 because it is adding markup (not just text)
*/