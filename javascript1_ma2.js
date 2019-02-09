//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
var eatIt = function(saysomething) {
	console.log(saysomething);
};

var fruit = function() {
	var name, color, edible;
};

fruit.prototype.eatIt = eatIt;

firstFruit = new fruit;
firstFruit.name = "Banana";
firstFruit.color = "yellow";
firstFruit.edible = "super tasty";
firstFruit.eatIt ("Eat some tasty banana");

var flower = function() {
	var name, color, edible;
};

flower.prototype.eatIt = eatIt;

firstFlower = new flower;
firstFlower.name = "Delphinium";
firstFlower.color = "purple";
firstFlower.edible = "very toxic";
firstFlower.eatIt ("Don't eat toxic Delphinium");

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen.slice(4, 5));

//3. Delete the last number in the array that you created above.
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

oneToTen.pop();

console.log(oneToTen);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myFavorites = ["Rosenborg", "Barcelona", "Tufte IL", "Tyskland"];

var button = document.querySelector("button");
button.addEventListener("click", function(myFavorites) {
	
	myFavorites = "";

	var myFavorites = ["Cadillac", "Chevrolet", "Mercedes", "Toyota"];

	console.log(myFavorites);

});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


//7. Create a simple function that logs the date.
function logDate(date) {
    var months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
  
    var month = date.getMonth();	
    var day = date.getDate();
    var year = date.getFullYear();
  
    return months[month] + ' ' + day + ' ' + year;
}
