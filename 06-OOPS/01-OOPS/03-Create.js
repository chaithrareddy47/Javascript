/*
 Object.create(prototype_object, propertiesObject)
Object.create method accepts two arguments as:

prototypeObject: Newly created object’s prototype object. It has to be an object or null.
propertiesObject: Properties of the new object. This argument is optional
*/

const person = Object.create(null);

console.log(typeof person);

person.personName = 'Virat'
console.log(person);


prototypeObject = {
    fullName: function () {
        return this.name + ' ' + this.lastName
    }
}

const anotherPerson = Object.create(prototypeObject)
console.log(anotherPerson); // empty obj with prototype is caredted

anotherPerson.name = 'John'
anotherPerson.lastName = 'Alex'

anotherPerson.fullName()


class UserOne {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    
}

UserOne.prototype.fullNameFunc = function () {
    return`My  name is ${this.name} and i am ${this.age} old `
}

const johnUser = new UserOne('John', 26);
console.log(johnUser.fullNameFunc());
