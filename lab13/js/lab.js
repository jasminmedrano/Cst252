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


// Given a name, hash the string, and
// return Mystic, Instinct, and Valor
function sortingTeams(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % teamsArray.length;
  return teamsArray[mod];
   // returns an object from the array
}



$("#my-button").click(function(){
  // get value from input field
 var name = $("#input").val()
 var teams = sortingTeams(name);
 console.log(teams);
 $("#output").html("Welcome! Your team is " + teams);
 var name = document.getElementById("input").value;
 // use name to get house from SortingHat function
 var teamsObj = sortingTeams(name);
 // output to output div (adding some text and HTML around the results)
 newText = "<h2>" + teamsObj.title + "!</h2>" +
         introHTML +
         "<p>\"" + teamsObj.text + "\"</p>" +
         creditHTML;
 var input = document.getElementById("input");
 myInput.addEventListener("focus", function() {
   addClass(document.getElementById("output"), "hidden");
   addClass(document.getElementById("tail-box"), "hidden");

});


$("#output").css({ 'color': '#3038D9', 'font-size': '160%' });
$("#br").css({ 'color': '#3038D9', 'font-size': '160%' });
$("#my-button").css({ 'background-color': '#f25C05', 'font-size': '100%', 'color': 'white'});
$("#input").css({ 'color': '#f25C05' });

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});
