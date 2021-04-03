/* 
 What is typescript? it is Javascript with typification, better for development & debug
 Browsers don't support typescript, so we must convert it when programming it, like with React
 The typescript compiler is the responsible for converting it
 Advantages => allows us to use next gen JS inside the browser, cause it will be compiled
 !AUTOCOMPLETION
 tsc filaName.ts => compiles and generates the correct JS => the one to be imported in HTML files
*/

// Primitive Types => number, string, boolean
// Complext types => object, arrays, tuple (array with fixed length and each pos has a type)

// NOTE PRIMITIVE TYPES
function addStuff(n1: number, n2: number) {
  return n1 + n2;
}

// Assigning types mannualy => Only not-initialized variables
let num1: string;
num1 = "3.3";

let num2: number;
num2 = 2.7;

// NOTE COMPLEX TYPES - Objects & Arrays
let car: {
  name: string;
  fabYear: string;
  seatAmount: number;
};

car = {
  name: "HB20",
  fabYear: "2016",
  seatAmount: 5,
};

console.log(car.name);

// Nested Objects & Arrays of some type
let person: {
  name: string;
  age: number;
  height: number;
  car: [number, string]; // TUPLE
  addresss: {
    street: string;
    num: number;
    city: string;
  }[];
};

// OBS: tuples are strict on sizes, but the push method is allowed to add more stuff, but assignments are considered erros

const cars: string[] = ["red car", "blue car"];

let human: [string, number];
human = ['victoria', 19];
console.log(human);

// NOTE ENUMS - useful for REDUX ACTION TYPES & other types stuff in apps!

// structure of an enum (resembles structs in C) => name it with an uppercase
// If I don't assign a value to the enum, it enumerates from 0 to N. 
// If I assign the first one with a number, the rest will follow that by incrementing the values
enum DialogType {
  WARNING = 'warning',
  ERROR = 'error',
  CONFIRM = 'confirm',
}

// Enums are kinda like classes that in the end results into objects...
console.log(DialogType); // Objects

let DialogBox: {
  title: string,
  code: number,
  type: string, // I can put the DialogType.WARNING as the fixed type in here & that prevents errors in case the ENUM has multiple element types
};

DialogBox = {
  title: 'You have deleted sensitive content',
  code: 507,
  type: DialogType.WARNING // using ENUM in practice
};

console.log(DialogBox);

if(DialogBox.type === DialogType.ERROR) {
  console.log("this is an error");
} 

// NOTE any, unknown, never type
// it gives the same flexibility of JS and doesn't apply type, which isn't the case
// use in case there is no way of knowing the data types
// !== from 'unknown' type, bc the unknown is a more strict type, bc it needs check to assign unknown stuff


// NOTE UNIONS
// gives more flexibility when working with types, eg. we can accept multiple types
// we do it using the pipe to separate the multiple types
// issue: if we operate two union types, TS will complain because it doesn't analyse what is in it so it can be != stuff

function combineStuff(value1: number | string | boolean, value2: number | string | boolean) {
  // return value1 + value2; // it complains bc it doesn't really know what is which

  // We must check most times if the types are similar
  if(typeof value1 === 'string' && typeof value2 === 'string')
    return value1 + value2;
  
  else if(typeof value1 === 'number' && typeof value2 === 'number')
    return value1 + value2;
  
  else if(typeof value1 === 'boolean' && typeof value2 === 'boolean')
    return value1 && value2;
    // return value1 + value2; // TS knows it is bool do to our check so it complains
  else
    return "not matching types";
}

console.log(combineStuff(13, 17));
console.log(combineStuff('13', 17));

// NOTE Literal Types
// We can literally assign a value as type to get a better code
// Could've used a Union, but it's nice to use Literal Types in those cases

function defineGender(name: string, gender: 'man' | 'woman' | 'non-binary') {
  return `${name} is a ${gender}`;
}

defineGender('Victoria', 'woman');
defineGender('Jules', 'non-binary');


function isAbleToDrink(name: string, ageRange: 'over-18' | 'below-18') {
  if(ageRange === 'below-18') 
    return name + ' can\'t drink';
  else 
    return name + ' can drink';
}

isAbleToDrink('Luke', 'below-18');
isAbleToDrink('Victoria', 'over-18');

// NOTE Type Aliases
// It allows us to create custom types, store unions, etc.
// The keywod 'type' allows us to create types by assigning them to a type

type Gender = 'man' | 'woman' | 'non-binary';

function defineGenderAliases(name: string, gender: Gender) {
  return `${name} is a ${gender}`;
}

defineGender('Victoria', 'woman');
defineGender('John', 'man');
defineGender('Jules', 'non-binary');

// We can asign objects/arrays types to the Aliases as a way to not repeat code
// and everytime we want an object of such structure, just use the type


// NOTE Function Related Types

// Return Type (after params) => usually infered by TS, but we can assign it!
function addSomeStuff(num1: number, num2: number): number {
  return num1 + num2;
}
// void type => there is no return

// Function as a Type =>
let addFunction: Function;

addFunction = addSomeStuff;
addFunction(12, 14);

// Isso aqui diz => pega uma função com 2 parametros number e retorna um number
let specificAddFunction: (p1: number, p2: number) => number;
// specificAddFunction = defineGender; // Error
specificAddFunction = addSomeStuff;

// Creating the same type but as an Alias
type AddFunction = (p1: number, p2: number) => number;
let specificAddFunctionWithTypes: AddFunction;
// OBS: WE CAN PASS CALLBACKS AND DEFINE THEM AS WELL
