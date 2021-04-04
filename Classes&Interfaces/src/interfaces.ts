/*
    NOTE Interfaces

    Interfaces describe an object. It's content, etc, a custom type with 'type'! :)
    they receive a structure with the properties and it's types + methods and force it to be applied
    
    Interface vs. Custom Type
        - interfaces are ONLY for objects/classes, specific for them
    
    * With classes 
        - I must indicate the methods and props it should have!
        - Use the extends keyword
    
    * Interfaces allow readonly, but not the others
    
    * Inheritance is also allowed in-between interfaces
    
    * Function Types with Interfaces
    
    * Optional Props & Params
        - add a '?' before the color

*/

interface Address {
  street: string;
  num: number;
  city: string;
  state: string;
  country: string;

  getFullAddress: (this: Address) => string;
}

const victoriaAddress: Address = {
  street: "Rua Estrela",
  num: 203,
  city: "Recife",
  state: "PE",
  country: "BR",
  getFullAddress() {
    return `${this.street}, ${this.num} - ${this.city}, ${this.state} ${this.country}`;
  },
};

console.log(victoriaAddress.getFullAddress());

// With classes => forces it to have the props and methods
class AddressCreator implements Address {
  street: string;
  num: number;
  city: string;
  state: string;
  country: string;

  constructor(
    street: string,
    num: number,
    city: string,
    state: string,
    country: string
  ) {
    this.street = street;
    this.num = num;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  getFullAddress() {
    return `${this.street}, ${this.num} - ${this.city}, ${this.state} ${this.country}`;
  }
}

// const newAddress = new AddressCreator(...args);

// Extends with interfaces

interface Car {
  model: string;
  brand?: string; // Optional prop
}

interface SportsCar extends Car {
  engine: string;
}

// Defining function types

interface MergeStrings {
    // Same as defining class methods types
    (...str: string[]): string;
}

const mergeStr: MergeStrings = (...str) => str.reduce((count, current) => count + ' ' + current, '');


interface PersonObj {
    name: string;
    age: number;
    gender?: string;

    greet(this: Person, message?: string): string;
}

const p1: PersonObj = {
    age: 19,
    name: 'Victoria',
    gender: 'woman',
    greet() {
        return 'Hi, ' + this.name + '! Greetings!'
    }
}


