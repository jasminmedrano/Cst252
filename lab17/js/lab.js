/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   04,05.2022
 * License:   Public Domain
 */


class Vehicle {
   constructor(make, model, year, color, extras, name) {
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
     this.extras = extras;
     this.name = name;
     this.info = function() {
          return ("It was a " + this.make + " " + this.model + " " + this.year + " " + this.color + " with " + this.extras + " named " + this.name);
    }
}
}


var vehicle1 = new Vehicle("Toyota", "Tacoma", 2019, "white", "4x4", "Gangsta");
var vehicle2 = new Vehicle("Jeep", "Patriot", 2010, "red", "emergency plushies inside", "I'm in my mums' car! Vroom Vroom");


  $("#output").append("<p>" + vehicle1.info() + "</p>");
  $("#output").append("<p>" + vehicle2.info() + "</p>");
