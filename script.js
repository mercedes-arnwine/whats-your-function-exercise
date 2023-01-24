//funtion without parameters
var startMyDay = function () {
  return "Es hora de tomar cafe!";
};
console.log(startMyDay());

//function with one parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));

//function with two parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and I work as a ${occupation}. `;
};
console.log(introduce("David", "construction worker"));
console.log(introduce("Hepta", "heart surgeon"));

//function with prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Amazing! You must feel good.");
  } else if (numGlasses < 8) {
    console.log(" Not bad, let's try for a little more tomorrow!");
  }
};

hydrationFeedback();
