/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03.15.2022
 * License:   Public Domain
 */

 function sortingTeams(name) {
    // get length of name
    var len = name.length;
    // do a mod 3 to get teams
    var mod = len % 3;
    // if conditional to set teamsStr to teams
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

 $("#output").css({ 'color': '#f25C05', 'font-size': '160%' });
 $("#br").css({ 'color': '#f25C05', 'font-size': '160%' });
 $("#my-button").css({ 'background-color': '#f25C05', 'font-size': '100%', 'color': 'white'});
 $("#input").css({ 'color': '#f25C05' });
