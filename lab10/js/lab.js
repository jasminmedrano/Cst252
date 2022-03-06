/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03. 04.2022
 * License:   Public Domain
 */

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
 function randomizeName(userName) {
   // convert userName string to an array
     var nameArray = userName.toLowerCase().split("");
     console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
     var shuffledArray = shuffleArray(nameArray);
     console.log("shuffledArray =", shuffledArray);
     var shuffledString = shuffledArray.join("");
 // shift to Title Case (like a name)
     var newName = toTitleCase(shuffledString);
  // return array to a string
     return newName;
 }


var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  inputValue = document.getElementById('input').value;
  console.log("You input:", inputValue);
});
