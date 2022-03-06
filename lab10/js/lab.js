/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03. 04.2022
 * License:   Public Domain
 */

 // sortUserName
 //  a function that takes user input and sorts the letters
 //  of their name
 function sortUserName(userName) {
     // // convert to lower case
    userName = userName.toLowerCase();
    console.log("userName =", userName);
     // // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
     // // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
     // // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
     // // Note that I could have done the above lines as a single line:
   userName.toLowerCase().split("").sort().join("")
   return userName.toLowerCase().split("").sort().join("");
 }

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


 function main() {
    var userName = getName();
     document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
     document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
     document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
     document.writeln("<div class='name'>" + randomName + "</div>")
 }




var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  inputValue = document.getElementById('input').value;
  console.log("You input:", inputValue);
});
