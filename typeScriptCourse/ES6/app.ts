//ES6 Features that are supported with TypeScript

// let & const
// let keyword create a block scoped variable
console.log("LET & CONST");
let variable = "Test";
console.log(variable);

variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // Won't work

// Block scope
function reset() {
    // console.log(variable);
    let variable = null; //same name
    console.log(variable); //null
}

reset();
console.log(variable); //Another value

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

// same as
//const multiplyNumbers = (number1: number, number2: number) => { return number1 * number2};
const multiplyNumbers = (number1: number, number2: number) => number1 * number2;

console.log(multiplyNumbers(10, 3));

//arrow function does not need argument
const greet = () => {
    console.log("Hello!");
};
greet();

//need to use () to declare the type for single argument
const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");

//use = for default parameter
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 991, 10, -3));

//... spread operator spreads out array into single value (list of value)
// rest parameter ... when calling function
console.log(Math.max(...numbers));

//rest parameter accepts a list of arguments and assign into an array
//rest parameter ... in own function
function makeArray(name: string, ...args: number[]) {
    return args;
}

console.log(makeArray("Max", 1, 2, 6));

// Destructuring for Array
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// Destructuring for object
const userData = {userName: "Max", age: 27};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);

