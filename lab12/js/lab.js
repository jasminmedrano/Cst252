/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03.11.2022
 * License:   Public Domain
 */


// find pink button and add click handler
$("#challenge-button").click(function(){
	// remove yellow class
  $("#the-text1").removeClass("yellow");
	// toggle pink class for text
  $("#the-text1").toggleClass("pink");
})


// find yellow button and add click handler
$("#challenge2-button").click(function(){
	// remove pink class
  $("#the-text2").removeClass("pink");
	// toggle yellow class for text
  $("#the-text2").toggleClass("yellow");
})
