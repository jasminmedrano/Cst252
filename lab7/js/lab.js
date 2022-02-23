/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   02.22.2022
 * License:   Public Domain
 */

 function sortUserName (){
          var userName = window.prompt("Yo! Gimme your name please! Let's make a new name for you!");
          document.write ("userName = ", userName);
    // split string to array
          var nameArray = userName.split('');
          document.write ("nameArray =", nameArray);
    // sort the array
          var nameArraySort = nameArray.sort();
          document.write ("nameArraySort =", nameArraySort);
    // join array back ta string
          var nameSorted = namearraySort.join('');
          document.write ("nameSorted =", nameSorted);
    //userName.toLower().split("").sort().join("")
          return nameSorted;
}

// output
document.writeln("Congrats on the new name!: ",
    sortUserName(), "</br>");
