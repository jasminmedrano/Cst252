/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   02.22.2022
 * License:   Public Domain
 */

heyyy

function sortUserName (){
          var userName = window.prompt("Yo! Gimme your name please! Let's make a new name for you!");
          document.writeln ("userName = ", userName);
    // split string to array
          var nameArray = userName.split('');
          document.writeln ("nameArray =", nameArray);
    // sort the array
          var nameArraySort = nameArray.sort();
          document.writeln ("nameArraySort =", nameArraySort);
    // join array back ta string
          var nameSorted = namearraySort.join('');
          document.writeln ("nameSorted =", nameSorted);
    //userName.toLower().split("").sort().join("")
          return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
