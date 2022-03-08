/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03. 04.2022
 * License:   Public Domain
 */

 // sortUserName
  // a function that takes user input and sorts the letters
  // of their name
   function shuffleArray(array) {
     var currentIndex = array.lenght, tempporaryValue, randomIndex;

     while (0 !== currentIndex) {

       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

       tempporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = tempporaryValue;
       }
     return array;
   }

function reorderUserName(word) {
  var wordArray = word.toLowerCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

buttonEl = document.getElementById('my-button');
console.log("button element:", buttonEl);

inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

outputEl = document.getElementById("output");
console.log("output element:", outputEl)

buttonEl.addEventListener("click", function (){
  var userName = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
