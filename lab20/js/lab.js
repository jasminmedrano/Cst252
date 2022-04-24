/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   04.24.2022
 * License:   Public Domain
 */
//url api
var url =" ";
var apiKey=" ";
$.ajax({
month: "4",
num: 2610,
link: "",
year: "2022",
news: "",
safe_title: "Assigning Numbers",
transcript: "",
alt: "Gödel should do an article on which branches of math have the lowest average theorem number.",
img: "https://imgs.xkcd.com/comics/assigning_numbers.png",
title: "Assigning Numbers",
day: "22"
});

$.ajax({
  dataType: 'json',
  url: imageUrl,
  data: data,
  type: "GET",
  success: function(data) {
    // do stuff
    console.log(data);
  }
});

$("#press-me").click(getAjax);



// If the request succeeds
.done(function( json ) {
    alert("Success!");
    var title = data.title;
    var imageUrl = data.img;
    var alt = data.alt;
    $("#output").html(html);
})
// If the request fails
.fail(function() {
    console.log(errorThrown + " Status:" + status );
});
