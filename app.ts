function add(n1: number, n2: number) {
    return n1 + n2;
}


//void has no return statement
//still allow for TS to infer return type
//comes back as undefined
function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));

//defining function variables
//allows to define which type of function can be used
let combineValues: (a: number, b: number) => number;

combineValues = add;


console.log(combineValues(8, 8))