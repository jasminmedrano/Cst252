/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03.08.2022
 * License:   Public Domain
 */

var bioEl = $(".main");
// assign variable bioEl


$(".main").append("<button id=my-button>Don't Click Me!");
// creates a button
$("#my-button");
// create a button
$("#my-button").click(function() {
  alert("I told you not to click me, you st*pid wh*re");
})
// alert pops up on screen


$("#my-button").css("background-color", "#79c468");
// changes background color of button
$("#my-button").css("color", "white");
// changes color button font
