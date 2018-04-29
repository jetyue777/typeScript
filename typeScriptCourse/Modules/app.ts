//use import keyword or we have to manually import all javascript files inside index.html
//TypeScript has its own import mechanism

//ES6 module import is better to use
//does not need to set file extension .ts
//can set relative path or absolute path such as from "@angular/core"
//typeScript is smart in resolving import, it sees the @ sign as absolute path
//absolute path will be always looked at the node_module folder by default
import {PI, calculateCirumcumference} from "./math/circle"
//or use * to import everything and add an alias Circle
//import * as Circle from "./math/circle";

//only one function inside rectangle file, can use different name such as calc
import calc from "./math/rectangle";


//Does not want to register everything on Global scope
//Since everything is registered there by default
console.log(PI);
//console.log(Circle.PI);
console.log(calculateCirumcumference(10));
//console.log(Circle.calculateCirumcumference(10));
console.log(calc(20, 50));