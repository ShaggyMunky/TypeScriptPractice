//assigning type 'object' not recommended as support for all types within the object
//are not shown. Use key:type assignments only when specifically needed. Otherwise,
//allow for typescript inference.
let personTemplate: {
    name: string;
    age: number;
};

//Other scenarion to use key:type assignment is with a clearly defined Tuple
//by defining a Tuple, it indicates ecactly what is allowed and where
const personTuple: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
    roleBad: [number, string]
} = {
    name: "Harold",
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    roleBad: ['author', 2] //Type error thrown
};

//Enums allow user identifyable names associated to numbers
//starts at base 0 index
//can assign a number at the first item, and all subsequent increment from the assigned
//also can assign different numbers to values not directly in order
//not restricted to numbers and can use text
enum Role { ADMIN, READ_ONLY, AUTHOR};
enum RoleStep { ADMIN = 5, READ_ONLY, AUTHOR}; //reads 5, 6, 7
enum RoleDefine { ADMIN = 5, READ_ONLY = 100, AUTHOR = 20}; //reads 5, 100, 20
enum RoleString { ADMIN = 5, READ_ONLY, AUTHOR = "AUTHOR"}; //reads 5, 6, 'AUTHOR'

const personEnum = {
    name: "Harold",
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};



const person = {
    name: "Harold",
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //Tuple type
};

//setting the kind of array with the type of which it consists
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);


//by using type inference, additional linting support provided for current type
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}