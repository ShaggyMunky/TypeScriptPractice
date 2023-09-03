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