function add(n1, n2) {
    return n1 + n2;
}
//void has no return statement
//still allow for TS to infer return type
//comes back as undefined
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
//defining function variables
//allows to define which type of function can be used
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
