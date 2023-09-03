function add(n1: number, n2: number, showResult: boolean, phrase: string){ //type set for parameters
    const result = n1 + n2;
    if (showResult) {
       console.log(phrase + result);
    } else {
        return result;
    }
    
}

//assigning type at variable instantiation not recommended due to redundancy
//and type inference. Only recomennded if variable not initialized when declared
let noNumber: number = 5; //not recommended
let okNumber: number; //ok
let number1 = 5; //ok

const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

