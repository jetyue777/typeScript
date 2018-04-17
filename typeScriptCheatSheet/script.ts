/**
 * Created by jetyue on 2018-03-03.
 */
/*
    Static Typing
 This means that you can declare the types of variables, and the compiler will make sure that they aren't assigned the wrong types of values. If type declarations are omitted, they will be inferred automatically from your code.

 */

var burger: string = 'hamburger',     // String
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);

/*
    Most Commonly Used Data Types:

 Number - All numeric values are represented by the number type, there aren't separate definitions for integers, floats or others.

 String - The text type, just like in vanilla JS strings can be surrounded by 'single quotes' or "double quotes".

 Boolean - true or false, using 0 and 1 will cause a compilation error.

 Any - A variable with this type can have it's value set to a string, number, or anything else.
 Arrays - Has two possible syntaxes: my_arr: number[]; or my_arr: Array<number>.
 Void - Used on function that don't return anything.
 */

/*

    Interface:

 Interfaces are used to type-check whether an object fits a certain structure. By defining an interface we can name a specific combination of variables, making sure that they will always go together. When translated to JavaScript, interfaces disappear - their only purpose is to help in the development stage.

 */

// Here we define our Food interface, its properties, and their types.
interface Food {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
function speak1(food: Food): void{
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream: Food = {
    name: "ice cream",
    calories: 200
}

speak1(ice_cream);

/*

 The order of the properties does NOT matter. We just need the required properties to be present and to be the right type. If something is missing, has the wrong type, or is named differently, the compiler will warn us.

 */


/*

    Classes and OOP
 When building large scale apps, the object oriented style of programming is preferred by many developers, most notably in languages such as Java or C#. TypeScript offers a class system that is very similar to the one in these languages, including inheritance, abstract classes, interface implementations, setters/getters, and more.

 It's also fair to mention that since the most recent JavaScript update (ECMAScript 2015), classes are native to vanilla JS and can be used without TypeScript. The two implementation are very similar but have their differences, TypeScript being a bit more strict.

 */

class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    items: Array<string>;  // The items in the menu, an array of strings.
    pages: number;         // How many pages will the menu be, a number.

    // A straightforward constructor.
    constructor(item_list: Array<string>, total_pages: number) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Methods
    list(): void {
        console.log("Our menu for today:");
        for(var i=0; i<this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

}

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();




class HappyMeal extends Menu {
    // Properties are inherited

    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
        // In this case we want the exact same constructor as the parent class (Menu),
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        super(item_list, total_pages);
    }

    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void{
        console.log("Our special menu for children:");
        for(var i=0; i<this.items.length; i++) {
            console.log(this.items[i]);
        }

    }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();

/*
 Generics are templates that allow the same function to accept arguments of various different types. Creating reusable components using generics is better than using the any data type, as generics preserve the types of the variables that go in and out of them.

 */

//A quick example would be a script that receives an argument and returns an array containing that same argument.

// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc<number>(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number

/*
 The first time we called the function we manually set the type to string. This isn't required as the compiler can see what argument has been passed and automatically decide what type suits it best, like in the second call. Although it's not mandatory, providing the type every time is considered good practice as the compiler might fail to guess the right type in more complex scenarios.

 */

/*
    Modules

 Another important concept when working on large apps is modularity. Having your code split into many small reusable components helps your project stay organized and understandable, compared to having a single 10000-line file for everything.

 TypeScript introduces a syntax for exporting and importing modules, but cannot handle the actual wiring between files. To enable external modules TS relies on third-party libraries: require.js for browser apps and CommonJS for Node.js. Let's take a look at a simple example of TypeScript modules with require.js:

 */

