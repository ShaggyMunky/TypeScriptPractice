//unkown type is more restrictive than the any type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string"){
    userName = userInput;
}

//this kind of function returns a "never"
//crashes the script and doesn't return anything
//not necessary but can be used for code clarity
function generateError(message: string, code: number): never {
    throw { message: message, error: code };
}

generateError("An error occurred!", 500);