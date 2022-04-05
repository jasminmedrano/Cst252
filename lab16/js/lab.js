/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   04,05.2022
 * License:   Public Domain
 */

 function Vehicle(make, model, year, color, extras, carquote) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.carquote = carquote;
  this.info = function() {
    var str = "It's a " + color + " " + year + " " + make + " " + model + " with " + extras + " called " + carquote + ".";
    return str;
  }
}

var vehicles = [];


vehicles.push(new Vehicle("Toyota", "Tacoma", 2019, "white", "$70 for full gas tank", "my main Gangasta"));
vehicles.push(new Vehicle("Jeep", "Patriot", 2010, "red", "$50 for full gas tank", "I'm in my mums' car vroom vroom!"));

outputEl = document.getElementById("output");
$("#output").append("<p>" + vehicles.info() + "</p>");
