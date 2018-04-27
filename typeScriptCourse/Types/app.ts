//JavaScript has Dynamic type, where TypeScript has static type
// string
let myName: string = 'Max';
// myName = 28; error

// number (integer, float)
let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// type any (no compilation check, no IDE support)
let typeAny;

let auto = "how are you";


// array
let hobbies: any[] = ["Cooking", "Sports"];
console.log("type of hobbies " + typeof hobbies);
hobbies = [100];
//hobbies = 100;

// tuples (fix the size and type)
let address: [string, number] = ["Superstreet", 99];
//address = ['test', 1, 1];

// enum (new type typeScript)
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2,// 2
    Good //should default to 3
}

let myColor: Color = Color.Good;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void - does not return anything
function sayHello(): void {
    console.log("Hello!");
}

// argument types number
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types - function are type on their own
//
let myMultiply: (a: number, b: number) => number;

//myMultiply can only be assigned of this format of function: (a: number, b: number) => number;
//accept two arguments with number and returns a number

//sayHello has no argument and returns nothing
//myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
// use {} to define the type of object property type
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};

// in object, order of property does not matter
userData = {
    age: 27,
    name: "Jet"
};

/*userData = {
    a: "Hello",
    b: 22
};*/

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
//complex = {};

console.log('jet testing '+ complex.output(true));

// type alias
// define a type using type keyword
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types (both work here)
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
myRealRealAge = 35;
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}