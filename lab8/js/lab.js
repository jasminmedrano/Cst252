/*
 * Author:    Jasmin Medrano & Anthony Lopez-Zamora <jasmedrano@csumb.edu> & Anthony Lopez-Zamora <anlopezzamora@csumb.edu>
 * Created:   02.24.2022
 * License:   Public Domain
 */

 function aBetterNumSort(x) {
   return x + 23;
 }

 // test function
 console.log("aBetterNumSort", aBetterNumSort(40));
 console.log("aBetterNumSort", aBetterNumSort(10));

array = [ 10, 40, 567, 2083, 38, 1.5, 69];
console.log("My array" array);

var result = array.map(aBetterNumSort);
// should return [33, 63, 590, 2106, 61, 24.5, 92]
console.log("Addition", result);

var result = array.map(function(x) {
  return x +23;
})
// should return [33, 63, 590, 2106. 61, 24,5, 92]
console.log("Addition Answer", result);

var result = array.map(function(x){
  return x * 2;
})
// should return [20, 80, 1134, 4166, 76, 3, 138]
console.log("Answer:", result);
