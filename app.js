function add(n1, n2) {
    return n1 + n2;
}
//void has no return statement
//still allow for TS to infer return type
//comes back as undefined
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
