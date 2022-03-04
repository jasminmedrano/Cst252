/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03. 01.2022
 * License:   Public Domain
 */

var outputEl = document.getElementById("output");




//creates a pink "Click here!" button for oneEl
var oneEl = document.createElement("button");
outputEl.appendChild(oneEl)
oneEl.innerHTML = "Click here!";
oneEl.style.fontsize = "20px";
oneEl.style.backgroundColor = "pink";
oneEl.style.color = "black";



//creates a purple "No click here!" button for twoEl
var twoEl = document.createElement("button");
outputEl.appendChild(twoEl)
twoEl.innerHTML = "No click here!";
twoEl.style.fontsize = "20px";
twoEl.style.backgroundColor = "purple";
twoEl.style.color = "white"
