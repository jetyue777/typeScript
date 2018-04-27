// Exercise 1
const double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2
/*const greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};*/

const greet1 = (name: string = "Max"): void => {
    console.log("Hello, " + name);
};

greet1();
greet1("Anna");

// Exercise 3
const numbers1 = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers1));
console.log(Math.min(...numbers1));

// Exercise 4
const newArray = [55, 20];
newArray.push(...numbers1);
console.log(newArray);

// Exercise 5
/*var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];*/

const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
/*var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;*/

const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);