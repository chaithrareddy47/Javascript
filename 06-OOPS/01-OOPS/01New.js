// New operator 
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const first = new Student('John', 26)

console.log(first.name); // prints john
console.log(first.age); // prints age


// Every JavaScript object has a prototype. All objects in JavaScript inherit their methods and properties from their prototypes.

console.log(Student.prototype);
// we get an object
 
const second = new Student('Jeff', 50)
console.log(second.name);
console.log(second.age);


// second constructor is pointing to the [parent] contsructor
console.log(second.__proto__ === Student.prototype);

console.log(Student.prototype.constructor);


Student.prototype.sayInfo = function () {
    return (this.name + ' is' + this.age +
         ' years old'
    );
    
}

console.log(second.sayInfo());

const third = new Student('Alex', 15)

console.log(third.sayInfo());



function Animal(name) {
    this.name = name;

}

Animal.prototype.speak = function () {
    return `${this.name} makes a sound Woof...🐶!`
}

const dog = new Animal('Alex')
console.log(dog.speak());
