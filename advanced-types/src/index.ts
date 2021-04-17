// NOTE Intersection Types
// It basically means COMBINE types + add some more stuff that's needed...
// Intersection operator: &

interface Car {
  model: string;
  brand: string;
  engine: string;
}

interface AirMotor {
  flying: boolean;
  wingEngine: string;
}

// Combining to types with Types & Interfaces
type FlyingCar = Car & AirMotor;
interface FlyingCar2 extends Car, AirMotor {}

// NOTE Type Guards
// We've been using it, when we have unions of types, we check if the types match with typeof to operate
// 1) typeof way
// 2) Check a certain property using the 'in' keyword, if it exists, because if it does it is os the certain type
//      'property name' in objectTarget => returns a truthy/falsy value
// 3) Type guards with Classes
