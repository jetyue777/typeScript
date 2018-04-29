//***************Generic******************
/*
        Why use Generic
 */

// Simple Generic
// following function is kind of like a Generic function
function echo(data: any) {
    return data;
}

//But there's a  disadvantage of this any type
//for example IDE does not recognize .length
console.log(echo("Max"));
//echo(27).length compiles well, but does not execute well: undefined
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// Better Generic
//use < any char of your choice > to make a generic function
// use <T> by convention
//function betterEcho<a>(data: a)  also works
function betterEcho<T>(data: T): T {
    return data;
}

//When data gets returned in following example, type is associated with it.
//not typescript is aware of the result type
//IDE recognizes .length
console.log(betterEcho("Max").length);
//betterEcho<number>(27).length does not compile, and has IDE error
//can also explicitly state the type by <number>
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
//const testResults: number[] = [1.94, 2.33]; //same as above
const testResults1: (number | string)[] = [1.94, "test"];
const testResults2: Array<number | string> = [1.94, "jet"];

testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string | number>(["Apple", 1]);

// Generic Types
//everything after the : and before = is a type assignment
//<T>(data: T) => T
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
//add <T> for generic class
//user specific type and then stored in T and U
//use extends number | string to constraint which type can be used
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;

    calculate(): number {
        //+ here convert string to number
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());