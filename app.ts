//Union types allow for multiple types of parameters to be used
//It may be required to have checkes performed on the types being used as the linting can throw an error if it's not 100% sure
//the actions of the two types will work

function combine(input1: number | string, input2: number | string) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Ana")
console.log(combinedNames);