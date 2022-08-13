"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //What happens if we declare a variable that already exists?//
      const firstName =
        "Nub"; /*Javascript always tries to look for the current "scope" to see if the variable is available. And since it is available, then it doesn't "look up" for other scopes to find that variable*/
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "NEW OUTPUT!"; //Here the output will be changed on the second callout because it is being re-defined//
      /*  const output =
        "NEW OUTPUT!"; here, this new definition will be ignored since JavaScript considers it a new variable that has nothing to do with the previous "output"*/
    }
    console.log(output);
    console.log(millenial);
    //  console.log(add(5, 6)); ----> this will give an error as it is being called outside of scope//
  }

  printAge();
  return age;
}

const firstName = "Jean";
calcAge(1981);

//Hoisting in Practice//

console.log(me);
console.log(job);
console.log(year);

var me = "Jean"; //undefined
let job = "teacher"; //initiatialization due to TDZ//
const year = 2000; //initializatation due to TDZ//
