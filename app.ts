//assigning type 'object' not recommended as support for all types within the object
//are not shown. Use key:type assignments only when specifically needed. Otherwise,
//allow for typescript inference.
let personTemplate: {
    name: string;
    age: number;
};

const person = {
    name: "Harold",
    age: 26
};

console.log(person.name);