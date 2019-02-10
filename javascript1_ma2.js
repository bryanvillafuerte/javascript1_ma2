//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
var classA = function() {
    this.name = "I am the Parent";
}

var a = new classA();
    classA.prototype.printParent = function() {
    console.log(this.name);
}

a.printParent();

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var classB = function() {
    this.name = "I am the Child";
}

inheritsFrom(classB, classA);

classB.prototype.printChild = function() {
    console.log(this.name);
}

var b = new classB();
b.printChild();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var countToTen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

console.log(countToTen.slice(4,5));


//3. Delete the last number in the array that you created above.
var countToTen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

countToTen.pop();
console.log(countToTen);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
/*Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.*/
var fruitStr = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

var mapObj = {
    Strawberries : "Bananas",
    strawberries : "bananas",
    strawberry : "banana"
};

fruitStr = fruitStr.replace(/strawberries|strawberry/gi, function sToB (matched){
    return mapObj[matched];
});

console.log(fruitStr);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myClub = ['Oslo City FC', 'Vålerenga Fotball', 'Manglerud Star Toppfotball', 'KFUM-Kameratene Oslo'];
var myCar = ['Porsche', 'Audi', 'Mercedes Benz', 'Tesla'];
console.log('My Club', myClub);

var $button = document.createElement('Button');
$button.innerHTML = 'Click Me';
document.body.appendChild($button);

$button.addEventListener('click', ()=> {
    myClub = [];
    myClub = [...myCar];
    console.log('My Cars', myClub);
});


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var celebCouples = [
    {femaleCeleb: 'Rita Wilson', maleCeleb: 'Tom Hanks'},
    {femaleCeleb: 'Sarah Jessica Parker', maleCeleb: 'Matthew Broderick'},
    {femaleCeleb: 'Jada Pinkett Smith', maleCeleb: 'Will Smith'},
]

var femaleCelebs = celebCouples.filter(function(femaleCeleb){
    return (femaleCeleb.maleCeleb === 'Tom Hanks');
})

console.log(femaleCelebs);


//7. Create a simple function that logs the date.
function showDate () {
    var d = new Date();
    console.log(d);
}

showDate();
