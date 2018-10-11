//TypeScript class is more powerful than ES6 class

class Person {
    // can use public, but can leave it out because default is public
    name: string;   // assign directly in the class body in TypeScript

    private type: string;

    //inherited class also has access to protected property
    protected age: number = 27;

    //public username is a quick shortcut to create the property in Person class and then assign
    constructor(name: string, public username: string) {
        this.name = name;
    }

    //default is public method
    printAge(): void {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string): void {
        this.type = type;
        console.log(this.type);
    }
}

//instantiate with new keyword
const person = new Person("Max", "max");
console.log(person);
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

// Inheritance using extends keyword
class Max extends Person {
    name = "Max";
    //"type" property does not get inherited from parent class due to private
    //type = "test";

    //inherited class also has access to protected property
    age = 10;

    constructor(username: string) {

        //must call the parent constructor with super keyword if define own constructor
        super("Max", username);
        this.age = 31;
    }
}

const max = new Max("max");
console.log(max);
max.printAge();

// Getters & Setters
class Plant {
    //
    private speciesP: string = "Default";

    //get keyword to
    get species() {
        return this.speciesP;
    }

    //set keyword to set value
    set species(value: string) {

        //check certain criteria are met before assigning the value
        if (value.length > 3) {
            this.speciesP = value;
        } else {
            this.speciesP = "Default";
        }
    }
}

let plant = new Plant();

//does not call like a method, get like a property
console.log(plant.species);

//does not set using method, set like a property
plant.species = "AB";

console.log(plant.species);

plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
//does not use "Static" keyword with the class
class Helpers {
    //static property
    static PI: number = 3.14;

    //static method
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
// class that can not get instantiated directly
// need to get inherited before use
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    //don't have a function body, should just say what it should returned
    //need to overridden before use
    abstract changeName(name: string): void;

    //does not need to get overridden before use
    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);

newProject.changeName("Super IT Project");
console.log(newProject);

console.log(newProject.calcBudget());

//#########################Private Constructors and Private Static property#########################
//Singleton Class Pattern
//Singleton Class can implement interfaces
class OnlyOne {

    //only one instance during runtime
    private static instance: OnlyOne; //able to access Class type (OnlyOne) within the class

    //can not instantiate the class from outside anymore by adding the private keyword to the constructor
    private constructor(public readonly name: string) {}

    static getInstance() {
        //can also use "this" keyword here as OnlyOne and this points to the same thing
        if(!OnlyOne.instance) {
            console.log(this);
            console.log(OnlyOne);
            console.log(this===OnlyOne); //true
            OnlyOne.instance = new OnlyOne("The Only One");
            console.log("one instance created!");
        }
        return OnlyOne.instance;
    }
}

//let wrongWay = new OnlyOne("The Only One");
let rightWay = OnlyOne.getInstance();

let anotherRight = OnlyOne.getInstance();

console.log(rightWay.name);

//rightWay.name = 'how are you';

//can also set rightWay.name to something
//Need to implement readonly property by adding the "readonly" property


