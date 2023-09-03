//assigning type 'object' not recommended as support for all types within the object
//are not shown. Use key:type assignments only when specifically needed. Otherwise,
//allow for typescript inference.
let personTemplate: {
    name: string;
    age: number;
};

const person = {
    name: "Harold",
    age: 26,
    hobbies: ['Sports', 'Cooking']
};

//setting the kind of array with the type of which it consists
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);


//by using type inference, additional linting support provided for current type
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}