// Object notataion

let user1 = {
    name: 'Taylor',
    points: 5,
    increment: function () {
        user1.points++
    }
}

// object.create()
// Object.create methods accept two arguments:
// proto and properties object


let user2 = Object.create(null)

user2.name = 'Cam'
user2.points = 8;
user2.increment = function () {
    user2.points++
}

function User(name, points) {
    this.name = name;
    this.points = points;

}

User.prototype.increment = function () {
    return this.points++
}

User.prototype.login = function () {
    return `Please Login , use points are ${this.points}`
}

let someUser = new User('Selena', 10);
console.log(someUser.increment());
console.log(someUser.login());

 