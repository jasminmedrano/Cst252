/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03.15.2022
 * License:   Public Domain
 */

 housesArray = [
     {
         title: "Mystic",
         text: "I am Blanche, leader of Team Mystic. The wisdom of Pokémon is immeasurably deep.I am researching why it is that they evolve. My team? With our calm analysis of every situation, we can't lose!"
     },
     {
       title: "Instinct",
       text: "Hey! The name's Spark—the leader of Team Instinct. Pokémon are creatures with excellent intuition. I bet the secret to their intuition is related to how they're hatched. Come on and join my team! You never lose when you trust your instincts!"
     },
     {
       title: "Valor",
       text: "I'm Candela—Team Valor's leader! Pokémon are stronger than humans, and they're warmhearted, too! I'm researching ways to enhance Pokémon's natural power in the pursuit of true strength. There's no doubt that the Pokémon our team have trained are the strongest in battle! Are you ready?"

]

// Return Mystic, Instinct, Valor
// depending on length mod 3
function sortingTeams(str) {
  len = str.length;
  mod = len % 3;
  if (mod == 0) {
    return "Mystic"
  }
  else if (mod == 1) {
    return "Instinct"
  }
  else if (mod == 2) {
    return "Valor"
  }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Given a name, hash the string, and
// return Mystic, Instinct, and Valor
function sortingTeams(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % teamsArray.length;
  return teamsArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("my-button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var teamsObj = sortingTeams(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>" + teamsObj.title + "!</h2>" +
          introHTML +
          "<p>\"" + teamsObj.text + "\"</p>" +
          creditHTML;
  var output = document.getElementById("output");
  output.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
})

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});










// given a number, return a teams

function sortingTeams(name) {
   // get length of name
   var len = name.length;
   // do a mod 3 to get teams
   var mod = len % 3;
   // if conditional to set teamsStr to house
   var teamsStr;
   if (mod == 0) {
       teamsStr = "Mystic";
   } else if (mod == 1) {
       teamsStr = "Instinct";
   } else if (mod == 2) {
      teamsStr = "Valor";
   }
   // returnteams txt
   return teamsStr;
}

$("#my-button").click(function(){

 var name = $("#input").val()
 var teams = sortingTeams(name);
 console.log(teams);
 $("#output").html("Welcome! Your team is " + teams);

});

$("#output").css({ 'color': '#3038D9', 'font-size': '160%' });
$("#br").css({ 'color': '#3038D9', 'font-size': '160%' });
$("#my-button").css({ 'background-color': '#f25C05', 'font-size': '100%', 'color': 'white'});
$("#input").css({ 'color': '#f25C05' });
