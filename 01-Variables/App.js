/* 
 * Variables and DataTypes
- variable is a co tainer that stores the information

var - its older and it comes with issues like scopes 

let - like bestfriend - things might change

const - unchangeable


*/

var crush = 'someone';

crush = 'change able to someone else 😂 ' // can we reassigned and reinitalized



let bestFriend = 'Alexa'

bestFriend = 'bestFend can be changed salena' // can we reassigned but cannot reinitalize

const spouse = 'who never change 🤣🤣'

// spouse = 'chnaged ' // hahaha go an error😁

console.log(crush);
console.log(bestFriend);
console.log(spouse);

/*
* DataTypes - 9 main datatypes

7 - primitve
3 -  complex like roles people in life 100% tur

*/


// string
const characters = 'Hey how are you'

// number 
let num = 2;

// boolean
const relationShip = false;

// null
let gf = null;

// undefined
let bf = undefined;

// objects

const family = {
    name: 'abc',
    members: 3,
    
}

// function

function square(num) {
    return num * num
}

square(2)

// arrays
const fruits = ['apple', 'banana', 'mango']
console.log(num);
console.log(relationShip);
console.log(bf);
console.log(gf);
console.log(family);
console.log(fruits);

// * tyepcoercion

// implicit - automatically done by js
// explicit - done by humans

//implicit - number converted to string automatically

let yearsOfTogether = 2;
let message = `we are been together for ${yearsOfTogether}`;

console.log(typeof message);

// explicit
let date = 3;
let totalDate = Number(date) + 2; 
console.log(totalDate);

// strict and loose eqality

console.log("0" == false);
console.log("0" === false);

// dynamic typing chnahging the types like changing the crushes

let firstCrush = 'Alena'
console.log(firstCrush);

firstCrush = 5;
console.log(typeof firstCrush);



// practial quetsions
var fruit = 'apple';

function checkFruits() {
    if (true) {
        var fruit = 'orange';
        console.log(fruit);
        
    }
    console.log(fruit);
    
}

checkFruits()







