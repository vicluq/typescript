type Gender = "man" | "woman" | "non-binary";

type Cars = { brand: string, model: string }[]

type Address = {
  street: string;
  num: number;
  city: string;
  country: string;
  zipCode: number;
};

type Person = {
  name: string;
  age: number;
  gender: Gender;
  cars: Cars,
  address: Address;
};

type IncreaseAgeFunction = (p: Person) => Person;

const human: Person = {
    name: 'Victoria Luquet',
    gender: 'woman',
    cars: [],
    age: 19,
    address: {
        city: 'Recife',
        country: 'Brazil',
        num: 203,
        street: 'Rua Estrela',
        zipCode: 52060282,
    }
}

const increaseAge: IncreaseAgeFunction = (person) => {
    person.age += 1;
    return person;
}

console.log(human);
console.log(increaseAge(human));

