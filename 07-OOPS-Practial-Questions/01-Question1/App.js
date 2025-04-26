/*
*🧪 Practice Task: Create a User with:
*name, age (as properties)

greet() method → prints:
"Hi, I'm [name] and I'm [age] years old."

    */

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function () {
    return `Hi,  I'm ${this.name} and I'm ${this.age} yeras old.`
}

const user1 = new User('Alice', 25)
console.log(user1.greet());

/*
*  2. Using Object.create() 
*/

const UserProto = {
    greets() {
       return `Hi,  I'm ${this.name} and I'm ${this.age} yeras old.`; 
    }
}

const user2 = Object.create(UserProto)
user2.name = 'Selena';
user2.age = 25;

console.log(user2.greets());

/*
* ✅ 3. Using ES6 Class
*/

class User3{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetFromClass() {
         return `Hi,  I'm ${this.name} and I'm ${this.age} yeras old.`;
    }
}

const user3 = new User3('Justin', 28);
console.log(user3.greetFromClass());


console.log(user1.__proto__ === user2 );
console.log(user2.__proto__ === user1 );
console.log(user3.__proto__ === user3 );
