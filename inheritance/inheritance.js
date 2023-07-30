/* 
  Inheritance:
  - In object to object inheritance, every child object has a access of methods and functions of it's parent object via prototype chain.
  - A child object is created using Object.create() method.
  - .__proto__ is a prototype chain and end of prototype chain is null. 
*/

// Created an object with object literals:
let person = {
  name: "Simmi",
  age: 28,
  profile: function () {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
};

// Created child object "person1" using Object.create method:
let person1 = Object.create(person);

// __proto__ is used to check the inherited properties of "person1":
console.log(person1.__proto__);
// {name: 'Simmi', age: 28, profile: ƒ}
