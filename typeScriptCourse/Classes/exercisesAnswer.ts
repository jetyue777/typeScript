// Exercise 1 - How was your TypeScript Class?
class Car {
    name: String;
    acceleration: number = 0;

    constructor(name: String) {
        this.name = name;
    }

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();

console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {

    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {

    calcSize(): number {
        return this.width * this.length;
    }

    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }
}

const rectangleInstance = new Rectangle(5, 2);
console.log(rectangleInstance);
console.log(rectangleInstance.calcSize());


//Exercise 3
class Person1 {
    private _firstName: string = "";


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "default";
        }
    }
}

const personInstance = new Person1();

console.log(personInstance.firstName);
personInstance.firstName = "Ma";
console.log(personInstance.firstName);
personInstance.firstName = "Maximilian";
console.log(personInstance.firstName);