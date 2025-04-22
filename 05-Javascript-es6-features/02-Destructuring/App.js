// /*

// * Destructuring means unpacking values from arrays or objects into separate variables easily.
// */

// /*
//  - ✨ 1. Array Destructuring
// Use cases:

// Pull out multiple values from a returned array

// Swap variables

// Set default values
// */

// // basic
// const arr = [1, 2, 3, 4, 5]

//  const [x, y, z] = arr ;
// console.log(arr);

// // skipping ellemts
// // const [first, , , ,  four] = arr
// console.log(first, four);

// // swapping
// let a = 5;
// let b = 10;
// [a, b] = [b, a]
// console.log(a, b);

// // default values

// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r);



// /*
//  ✨ 2. Object Destructuring
// Use cases:

// Pull out specific properties

// Rename variables

// Set default values

// Use inside functions
// */

// const person = {
//     name: 'jhon',
//     age: 30,
//     city:'New York'
// }

// const { name, age, city } = person;
// console.log(person);


// // renaming varibles
// const { city: hometown } = person;
// console.log(hometown);

// const { job= 'Developer' } = person;
// console.log(job);


// // nexted object destructuirng
// const user = {
//     id: 1,
//     info: {
//         email: 'abc@gmail.com',
//         address:'123 street'
//     }
// }


// const info = user.info.email;
// console.log(info);

// Q1.
// *What type of destructuring is needed? (Object or Array?)

const car = {
    brand: 'Toyota',
    year : 2020,
}  // its an object destructuing

// * Q2.
// * Write destructuring to pull out brand and year from the above car object.

const { brand, year } = car;

//Q3.
// * What type of destructuring is needed? (Object or Array?)
const numbers = [100, 200, 300];
console.log(numbers); // array destructing


/* Q4.
Destructure the numbers array so that:
first = 100
second = 200
*/
const [first, second] = numbers 

// Q5.
// True or False:
// You must use {} to destructure an array. - false because its used for object to match key value pairs

// Q6.
// Fill in the blank:

const [a, , b] = [1, 2, 3, 4]
console.log(a, b); // 1 and 3 will be output


// Q7.
// Given:
const person = {
    name: "John",
    city: "Delhi",
    country: "India"
};

const { city: hometown } = person;

// q8

const colors = ['red', 'green', 'blue'];
let [color1, color2, color3] = colors;

[color1, color3] = [color3, color1];
console.log(color1, color2);


 // Q9.
// If we destructure but the property doesn't exist in the object, what will be its value?
const { age } = { name: "Tom" };

// console.log(age); // propertu id not defined we get error

// Q10.
// True or False:
// You can destructure nested objects inside one line. - true