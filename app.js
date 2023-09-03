//Union types allow for multiple types of parameters to be used
//Add uniong types with the '|'. Can add more than two different types on one parameter
//It may be required to have checkes performed on the types being used as the linting can throw an error if it's not 100% sure
//the actions of the two types will work
//literal types indicate what the exact value that can be held
//
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Ana", "as-text");
console.log(combinedNames);
