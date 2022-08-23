// alert("Hello World from external JS");
// const a = 10;
// var myName = "test";
// alert(myName);
// let place = "TVM";
// alert(place);

let myText = "Hello and Welcome";
// let partText = myText.slice(4,10);
// let partText = myText.slice(-11,-4);
// let partText = myText.slice(5);

// let partText = myText.substring(4,10);
// let partText = myText.substring(4);


// let partText = myText.substr(4,10);
// let partText = myText.substr(-4);

// alert(partText);

// string replacement with replace
myText = "Hi There! How are you";
// let newText = myText.replace("How",  "Who");
// alert(newText);

// joining two strings using javascript
myText2 = "Hope you are doing fine";
// let myJoinedText = myText.concat(myText2)
// alert(myJoinedText)

// changing case
// alert(myText2.toUpperCase())
// alert(myText2.toLowerCase())

// string trim
let text1 = "      Hi there!       "
// alert(text1)
// alert(text1.trim())

// extract char from string
let text2 = "Hello World";
// alert(text2.charAt(2));
// alert(text2.charCodeAt(2));

//  arithmetic operations
var a = 15, b = 10;
var result = a + b;
// alert(result);
var result = a - b;
// alert(result);
var result = a * b;
// alert(result);
var result = a / b;
// alert(result);
var result = a % b;
// alert(result);

// evaluating the math expression using js
var result = eval("a * b + b + 2 + 3");
// alert(result);

// boolean operations
var a = 5, b = 10, c = 5;
var result = a === b;
// alert(result);
var result = a !== b;
// alert(result);
var result = a <= b;
// alert(result);
var result = a >= b;
// alert(result);

// conditional operators
var a = 5, b = 10;
if(a > b) {
    // alert(a + " is greater than" + b)
}
else {
    // alert(b + " is greater than" + a)
}

// switch statement
switch(new Date().getDay()){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
       day = "Weekend";
}
// alert(day)

// Loops in JS
// while loop
var a = 5;
while(a < 10){
    // alert(a);
    a++;
}

// for loop
for(var i = 1; i < 10; i++){
    // alert(i)
}

// Functions is JS
// simple function declaration
var add = function(a, b)/* or function add(a, b) */{
    return a + b;
}

// alert(add(5, 10));
// arrow functions
var sub = (a, b) => {
    return a - b;
}

// alert(sub(10, 5));
// in a single line
var square = (a) => a * a;

// alert(square(4));

// mapping an array to an arrow function
var myArray = [2, 4, 6];
var squareArray = myArray.map(a => a * a);
// console.log(squareArray);

// JavaScript Arrays
var myArray = [];
myArray = ["Apple", "Orange", "Grapes"];
// console.log(myArray[0]);
myArray[1] = "Pineapple";
// console.log(myArray);
// console.log(myArray.length);
myArray.push("Mango");
// console.log(myArray);
myArray.pop();
// console.log(myArray);

// looping through the array
// console.log("Using for : ")
for(var i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
}
// console.log("Using forEach : ")
myArray.forEach(i =>{
    // console.log(i);
})

// concat for immutable arrays
const myItems = ["Milk", "Bread", "Butter"];
var myItems2 = myItems.concat("Orange");
// console.log(myItems2);

// destructuring a JS array
// assigning each value of an array to a variable
t  = [1, 2, 3, 4, 5, 6, 7, 8];
[first, second, third, ...rest] = t;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// JS Objects
var student = {
    name: "Tom",
    age: 25,
    talk: function() {
        // console.log("Hello All");
    }
};

student.name = "Tim"; // assigning a new name 
// console.log(student.name);
// console.log(student.age);
// student.talk();

// JS Nested Objects
student.address = {
    door_no: 15,
    district: "NCR"
};

// console.log(student.address);
// console.log(student.address.door_no);

// declaring an empty object
var car = {}

car.model = "Swift";
car.stop = function () {
    // console.log(this.model + " Stopped!"); 
}

// console.log(car.model)
// car.stop()

// JS classes
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        // console.log("Hello I am " + this.name);
    }
}

var tim = new Person("Tim", 21);
tim.greet()

// JSON Objects
// creating a JSON object 
var jsonString = JSON.stringify({
    name: "Tim",
    age: 30,
    address: {
        district: "TVM",
        locaton: "Techno Park"
    }
});

// console.log(jsonString);

// parsing the json string
var parsedJson = JSON.parse(jsonString);
// console.log(parsedJson.name);
// console.log(parsedJson.age);
// console.log(parsedJson.address.district);
// console.log(parsedJson.address.locaton);

// DOM Manipulation
var myElements = document.getElementsByTagName("p");
var myh2WithId = document.getElementById("myh2elemid");
var myh3WithClass = document.getElementsByClassName("myh3elemclass");

// with css selectors
// selecting a single of frst occurence of an element
var myHeaderWithId = document.querySelector("#header");
// selecting all the occurences
var myAllBtns = document.querySelectorAll(".btn");

// Fetching values ordata inside the HTML elements
// getting the text content inside an element
// alert(myElements[0].textContent);
// alert(myElements[1].textContent);
// get the value from HTML elements like in form elements
var myTxtName = document.getElementsByName("txtcustname");
// alert(myTxtName[0].value);
// alert(myHeaderWithId.innerHTML);

var handleClick = function(event) {
    alert(document.getElementById("mytxtbox").value);
    document.getElementById("mytxtbox").value = "0";
}

var button = document.getElementById("button1");
button.addEventListener("click", handleClick());