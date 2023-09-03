//Union types allow for multiple types of parameters to be used
//Add uniong types with the '|'. Can add more than two different types on one parameter
//It may be required to have checkes performed on the types being used as the linting can throw an error if it's not 100% sure
//the actions of the two types will work

//literal types indicate what the exact value that can be held

//type alias: type keyword is TS specific
//used to reduce repeated union types
//best used as a reusable declaration across project
type Combinable = number | string;

function combine(
    input1: Combinable,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text' /*literal type*/) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number' ){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Ana", "as-text")
console.log(combinedNames);