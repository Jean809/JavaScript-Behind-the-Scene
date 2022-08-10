"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = "Jean";
calcAge(1981);
