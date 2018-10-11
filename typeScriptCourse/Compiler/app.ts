let myName: string = "Max";
let myAge: number = 27;

//TypeScript warns you during compilation, but still compiles to javascript as myName = 30;
//able to suppress it in tsconfig.json file
//myName = 30;


let anything : string | number;
anything = 12;

// myName = 30;

function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number = 0;

    console.log(somethingElse);

    if(isTrue) {
        result = 12;
    }

    return result ;
}