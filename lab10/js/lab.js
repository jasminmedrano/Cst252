/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   03. 04.2022
 * License:   Public Domain
 */

 // sortUserName
  // a function that takes user input and sorts the letters
  // of their name
   function sortUserName (){
          var userName = userName.toUpperCase();
            console.log("userName=",userName);
      // split string to array
            var nameArray = userName.split('');
            console.log("nameArray =", nameArray);
            var nameArraySort = nameArray.sort();
            console.log ("nameArraySort =", nameArraySort);
      // join array back to string
            var nameSorted = nameArraySort.join('').toUpperCase();
            console.log ("nameSorted =", nameSorted);
            return nameSorted;
  }

  var buttonEl = document.getElementById('my-button');
  buttonEl.addEventListener("click", function() {
    document.getElementById("input").innerHTML = output;
  });
