function Person(firstName, lastName, birthYear,age) {
  // console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
    this.birthYear = birthYear;
    this.age = age;
    console.log(this);
    

  /*
       BAD! ❌ Method inside constructor
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };

    */
}

Person.prototype.calAge = function () {
    return (2025 - this.birthYear + ' Years')
}


// instance of person 
const user1 = new Person('Johnas', 'sachtmend', 1897)  
console.log(user1.calAge());

const matilda = new Person('Matilda', 'Henry', 1998)
console.log(matilda.calAge());

/*
 instanceof -	If the object belongs to a specific constructor or class==>	car instanceof Car // true
*/
console.log(user1 instanceof Person);

