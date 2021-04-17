/* NOTE Classes 

Classes represent something and it's instance is the object conteining the info of that something
They contain all the logic to deal with this element (Objects Blueprints)

Ex: Class Product represents a product. it has methods to create, fetch, add to cart, etc.
    React's class components are an element like that

* Compilation: 
    - ES6 => creates a class but removes the elements defined with types
    - ES5 => since it does not have classes, it uses constructor functions

* This Keyword:
    - Refers to the element/obj that called the method, the instances
    - Adding to the params with the claas/obj type specifies which element does it refer 

* Public & Private & Protected Properties and Methods (only TS) + shorthand creation of elements in constructor
    - We can access the private ones within the class methods we have due to the 'this' keyword
    - Private props aren't accessible in classes that inherit the class. Toachieve it use the PROTECTED

* Read Only Modifiers (only TS)
    - Properties that shloud not be changed
    - Since it is only in TS, if we change the readonly, it will only be an error in compilation

* Getters & Setters
    - Getters are methods that allow me to access private properties in a more secure way (we don't execute it to use it)
    - Setters can receive data and set private props, it's created as a method bu used like a variable with dot notation

* Static methods and properties (JS already)
    - functions/vars that are accessed with the Class. This is cool bc the class can be a grouping mechanism

* abstract classes
    - Allows to use abstract methods, meaning, methods that the children will be obligated to overwrite according to their needs
    - we must give the type of return and for params, so that the children classes follow this structure
    - we don't need this though if it's just overwriting. we can simply overwrite

* Singleton pattern
    - Private constructors -> create only ONE element for the specific class. on able to create the instace whithin the class
      to do so: store the instance in a private static variable cause it is accessible using public static  methods
    - we check if there is an instance and if so, don't allow the creation

*/


class Person{
    // Como preciso definir quais são os dados e que tipos, logo tenho que definir esses elementos na Classe!
    // Tanto que se ver o codigo comilado isso não está lá pois JS é flexivel com tipo e elementos
    protected readonly id: number;
    name: string;
    age: number;
    hobbies: string[];

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.hobbies = []; // Must initialize ALL
    }

    // Adding methods (private & public)

    // This is a PUBLIC method (default), so it will be avaliable when the object is created
    agePerson(this: Person) {
        this.age += 1;
    }

    // addHobby(hobby: string) {
    //     this.hobbies.push(hobby);
    // }

    // This (obviously) is a private method, so only the class can access it and not directly from the object
    private addNewHobby(id: number, hobby: string) {
        // ... get an array of people and search by id
    }
}

// Inheritance => gets the properties from the dad class and has it owns
class Man extends Person {

    constructor(id: number, name: string, age: number, public gender: string = 'man') {
        super(id, name, age);
        this.gender = gender;

    }
}

const personMan = new Man(237, 'Luke', 19);


console.log("Before aging:", personMan.age);
personMan.agePerson();
console.log("After aging:", personMan.age);
