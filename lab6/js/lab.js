/*
 * Author:    Jasmin Medrano <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   02.10.2022
 * License:   Public Domain
 */

//Define Variables
myTransport = ["Toyota Tacoma", "Rides from family members", "Jeep"
];

myMainRide = {
  make: "Toyota",
  model: "Tacoma",
  color: "White",
  year: 2019,

  age: function() {
    return 2022 - this.year;
  }

}


// output
document.writeln("Ways I get around: ", myTransport, " </br>");
document.writeln("My main way I get around: <pre>",
  JSON.stringify(myMainRide, null, '/t'), "(</pre>");
