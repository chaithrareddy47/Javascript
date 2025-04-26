/*

* What's the main difference between Object.create() and constructor function?

- in object.create we have to manually ceate the constructior and we aggain nned to assin them to the object this is used and useful when we have to create objestc mnaually 

in fynction constructore is used with out using the class key word here we no nne dto assigns coonstructors amnually we can directly createbinside the function constructors itseld that why we call fu nction constructor

* 2 In ES6 classes, where are the methods stored?
methods are stores in the classes we will not craeted outside the class

* Why do we prefer putting methods on the prototype?
becuse we dnot want to crete duplicate code for example when we want 100 users we cannot crete 100 function and send manually insted if we crete prototype its abluceprint it autimatically duplicate dthe function we dnt need to manually

*/

/*
 💡 MINI CHALLENGE:
Create a Car object using all 3 methods:

Each Car should have:

Properties: brand, year

Method: describe()
👉 prints: "This car is a [brand] made in [year]."
*/

function Car(brand, year) {
    this.brand = brand;
    this.year = year;

}

Car.prototype.describe = function () {
    return `This car is a ${this.brand} made in ${this.year}.`;
}

const car1 = new Car('Maruthu', 1998)
console.log(car1.describe());



class Car3{
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    describe3() {
         return `This car is a ${this.brand} made in ${this.year}.`;
    }
}

const car3 = new Car3('Wagnor', 2020)

console.log(car3.describe3());


const describe1 = {
    
    descFunc() {
         return `This car is a ${this.brand} made in ${this.year}.`;
    }
}


const car2 = Object.create(describe1);

car2.brand = 'G-20';
car2.year = 2001;
console.log(car2.descFunc());



