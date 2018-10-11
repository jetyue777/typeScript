// Exercise 1
const double1 = (value: number) : number => value * 2;
console.log(double1(10));

// Exercise 2
const greet2 = (name: string = "Max") : void =>  {
    console.log(`Hello, ${name}`);
};

greet2();
greet2("Anna");

//Exercise 3
const numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

//Exercise 5
const testResults2 = [3.89, 2.99, 1.38];
const [one, two, three] = testResults2;
console.log(one, two, three);

//Exercise 6
const scientist2 = {firstName: "Will", experience: 12};
const {firstName: a, experience: b} = scientist2;
console.log(a, b);