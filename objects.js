// a) Create an object with 10 different elements (properties)
let myObject = {
  name: "John",
  age: 20,
  city: "Uyo",
  country: "Nigeria",
  job: "Web developer",
  hobby: "Listening to music",
  married: false,
  height: 180,
  weight: 75,
  language: "English"
};

console.log("Initial Object:", myObject);

// b) Delete two elements
delete myObject.age;
delete myObject.weight;

console.log("After Deleting Two:", myObject);

// c) Add three new elements
myObject.car = "Tesla";
myObject.sport = "Football";
myObject.color = "Blue";

console.log("After Adding Three:", myObject);

// d) Print the elements and length
console.log("Object Elements:", myObject);
console.log("Object Length:", Object.keys(myObject).length);

// e) Create an array of 10 different numbers
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Numbers Array:", numbers);

// f) Delete the last two elements
numbers.pop(); // removes 100
numbers.pop(); // removes 90
console.log("After Deleting Last Two:", numbers);

// g) Change into an array of animals
let animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Horse", "Monkey", "Giraffe", "Zebra", "Rabbit"];
console.log("Animals Array:", animals);
