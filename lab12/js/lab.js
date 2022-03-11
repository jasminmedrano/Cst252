/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03.11.2022
 * License:   Public Domain
 */


// find red button and add click handler
$("#challenge-button").click(function(){
	// remove blue class
  $("#the-text1").removeClass("blue");
	// toggle red class for text
  $("#the-text1").toggleClass("red");
})


// find green button and add click handler
$("#challenge2-button").click(function(){
	// remove red class
  $("#the-text2").removeClass("red");
	// toggle blue class for text
  $("#the-text2").toggleClass("blue");
})
