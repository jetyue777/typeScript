//Interface is brand new concept in TypeScript
//Interface is a contract signed by an object that guarantee
//to have a certain property, function, etc.
interface NamedPerson {
    firstName: string;
    age?: number;   //optional property
    [propName: string]: any;    //Dont know the property in advance (dynamic property)
    //use [] as a key name of type of string
    //use any keyword if we dont know the type of the property
    greet(lastName: string): void;  //method for interface
}

//interface NamedPerson is used as a type here
//person object here sign a contract with interface NamedPerson
//to ensure person has firstName
//function greet(person: {firstName: string})
//{firstName: string} can also be define using type keyword

//Difference between interface vs type
//An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
// An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
function greet(person: NamedPerson) {
    //user interface ensures person.firstName is defined
    console.log("Hello, " + person.firstName);
}

//interface NamedPerson is used as a type here
function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

//interface NamedPerson is used as a type here
const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"], //[propName: string]: any;
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");

//need to implement required properties and method
class Person2 implements NamedPerson {
    firstName: string;
    lastName: string;

    //class with default constructor (does not accept any argument)

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person2(); //with default constructor
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number; // Function Types
}

//above same as below
//type DoubleValueFunc = (number1: number, number2: number) => number;

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
    //return 'hello'
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance
//interface user "extends" to inherit another interface
interface AgedPerson extends NamedPerson {
    age: number;
}

//User interface as a type
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);

//interface get totally ignored when compiling in JavaScript (not in the compiled code)
//interface is just to check for error during compilation