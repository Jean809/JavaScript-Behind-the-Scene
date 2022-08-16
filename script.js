"use strict";
/*

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //What happens if we declare a variable that already exists?//
      const firstName =
        "Nub"; //Javascript always tries to look for the current "scope" to see if the variable is available. And since it is available, then it doesn't "look up" for other scopes to find that variable/
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "NEW OUTPUT!"; //Here the output will be changed on the second callout because it is being re-defined//
      /*  const output =
        "NEW OUTPUT!"; here, this new definition will be ignored since JavaScript considers it a new variable that has nothing to do with the previous "output"*/
/*
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

*/

//------------------------------------------------------------Hoisting and TDZ in Practice ----------------------------------------------------------------------//

/*
console.log(me);
//console.log(job);
//console.log(year);

var me = "Jean"; //undefined
let job = "teacher"; //initiatialization due to TDZ//
const year = 2000; //initializatation due to TDZ//

//functions

console.log(addDeclaration(2, 2)); //goes through without a problem
console.log(addExpression(2, 2)); //TypeError since expression function would be undefined(2,2) which is not a function which is error)
console.log(arrowfunc(2, 2)); //initialization error due to TDZ (if we were to use "var" to create expression/arrow function then it would be undefined(2, 2) which is not a function which is error)

function addDeclaration(a, b) {
  return a + b;
}

var addExpression = function (a, b) {
  return a + b;
};

const arrowfunc = (a, b) => a + b;

// Other examples//

if (!numProducts) {
  //the shoppingcart function will run because numProducts is undefined as numProducts is hoisted
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
*/

// --------------------------------------------------------- .this Keyword in Practice --------------------------------------------------------------------------------//

console.log(this); //this will display the global object of windows

function calcAge(birthYear) {
  console.log(2022 - birthYear);
  console.log(this); //The reason we get undefined is because in the windows object, "this" is an empty value so it is classified as "undefined" over here
}

calcAge(2000);

//What happens if this were to be an arrow function? ----------->

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); //the reason this prints the same as "this" of outside function is because arrow functions have use "this" of their parent func. In this case parent is the the object Windows
};

calcAgeArrow(2000);

const jean = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

jean.calcAge();
