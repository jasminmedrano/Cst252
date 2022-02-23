/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   02.22.2022
 * License:   Public Domain
 */

// sortUserName
// a function that takes user input and sorts the letters
// of their name
 function sortUserName (){
        var userName = window.prompt("Yo! Gimme your name please! Let's make a new name for you!");
          console.log("userName=",userName);
    // split string to array
          var nameArray = userName.split('');
          console.log("nameArray =",nameArray);
    // sort array
          var nameArraySort = nameArray.sort('');
          console.log ("nameArraySort =", userName);
    // join array back to string
          var nameSorted = nameArraySort.join('');
          console.log ("nameSorted =", nameSorted);
          return nameSorted;
}

// script output
document.writeln("Congrats on the new name!----",
sortUserName(), "</br>");
