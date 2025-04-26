/*
 uisng ingeritance in 3 ways
*/


// ✅ 1. Constructor Function Inheritance

function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;

}

Vehicle.prototype.describe = function () {
    return `This vehicle is a ${this.brand} made in ${this.year}.`;
}

// inherit

function Car(brand, year, type) {
    Vehicle.call(this, brand, year)
    this.type=type
}

