// Understanding the basics of Typescript

// Adding types to function parameters to specify what we should receive => use the colon and give the type
function addStuff(n1: number, n2: number) {
  return n1 + n2;
}

// Assigning types mannualy => Only not-initialized variables
let num1: string;
num1 = "3.3";

let num2: number;
num2 = 2.7;

console.log(addStuff(+num1, num2));
