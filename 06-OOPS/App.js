/*
 * OOPS (Object oriented programming)
*/

// with functions
function getTriangele(base, height) {
    return (1/2 * base * height)
}

function doubleTriangle(abc , base , height) {
    const x = abc(base, height)
    return x
}

console.log(doubleTriangle(getTriangele, 5, 4));


// using objects

let triangle = {
    a: 3,
    b: 4,
    triangleFunc: function () {
        return this.a * this.b
    }
};
console.log(triangle.triangleFunc());


class Triangle {
    getTriangleSides(){
    return (this.a + this.b + this.c)
    }

    getArea() {
        return (this.a + this.b + this.c)/2
    }
}

let tri1 = new Triangle()
tri1.a = 10;
tri1.b = 10;
tri1.c = 10;
console.log(tri1.getArea());
console.log(tri1.getTriangleSides());


//

class Student{
    // data protperties
    Name
    Age
    Standard

    // Method (action)
    study(){}

    play(){}

    doHomework(){}


}

// constructors
/*
 Using constructors, we don’t hardcode values.
We give values dynamically when we create the object.


*/

class Students{
    constructor(age) {
      
        this.age = age;


       
    }
    doubledArr() {
        console.log(this.age);

        const arr = this.age.map((a) => {
           return a * 2
        })
        console.log(arr);
        
        
    }
}

const arr = [1,2,3,4,5,6,7,8,9]

const newStudent = new Students( arr)
console.log(newStudent.doubledArr());


class Abc {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name} Welcome to oops`;
  }
}

class Xyz extends Abc{
    display() {
        return `sure lets enjoy 🤘`
    }
}

const obj = new Abc('Chai');
console.log(obj.greet());


const newObj = new Xyz('Reza')
console.log(newObj.greet());
console.log(newObj.display());


