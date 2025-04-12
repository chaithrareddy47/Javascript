// /*
//  * use strict mode
// used for actibating sctrict mode
// helps to log the bug
// */
// 'use strict';
// let hasDriverLicense = false;
// const passTest = true;
// /*
// if (passTest) hasDriverLicens = true;
// here we did the mistake but also it runs the prgtam with strictmode it throws the error
 
// */
// if (passTest) {
//     console.log('i can drive');
    
// }

// /*
// * Functions
// small code that perfom sepecific action
 
//  */
// // this function does not retuen anything becuse we are justing logging the value
// // thas why we dnt store this in any variable
// function logger() {
//     console.log('My name is selena');
    
// }
// // invoking teh function or calling the function
// logger();
 
// // we can send and retuen the data not only we reuseit

// // food processor
// // paratmetes are like varibles that are spicied only to that particular function
// function juiceMachine(apples, oranges) {
//     console.log(apples, oranges);
//     return `Juice with ${apples} apples  and ${oranges} oranges`
    
// }

// // console.log(juiceMachine("🍎", "🍊"));
// console.log(juiceMachine(5, 4));
// // this are the arguments
// const fruitJuices = juiceMachine(3, 4)
// console.log(fruitJuices);

// // we can directly log the fuction or we can store it in any varibles


// /*
// * Function declaration vs expression
// function declaration and statemnet bothh are same
// function with keyword and function name is called declaration
// function name(){
// }

// arguments are the catual values
// parameters are the placeholds inside the function
// */

// function calAge(currentYear, birthYear) {
//     const result = (currentYear - birthYear);
//     return result
// }
// console.log(calAge(2025, 1998));

// // function expression assigning function to the variables also called as anonymous function
// let calAge1 = function (currentYear, birthYear) {
//     return currentYear - birthYear
// }

// const age1 = calAge1(2025, 1998)
// console.log(age1);

// /*
//  the differnce b.\/w thm is hositinga nd we can call before its declaraton or definedin nnormal functions
// */

/*
 * Arrow Functions 
 - its a part of es6 
 syntac const greetinh = () =>{}
 - its still function expression 
 - retuen happens implicitly

*/

// const calAge = (currentYear, birthYear) => {
//     return (currentYear - birthYear);
    
// }

// const age = calAge(2025 , 1998)
// console.log(age);

/*
 Functions calling a other function
*/

const cutFruitPieces = (fruit) => {
    return fruit * 4;
}

const fruitProcessor = (apple, orange) => {
    const cutPieces = cutFruitPieces(apple)
    console.log(cutPieces);
    
    
    
    
    const juice = `Juices with ${cutPieces} apple piecses and  ${orange} orange pieces`
    return juice;
}

const juice = fruitProcessor(5, 4);
console.log(juice);


/*
* Arrays - datastructure
arrays and objects are more importatant data structure
programming is all about data 



*/
// brackets are used most widely than function array
const arr = ['bob', 'michel', 'steven']
console.log(arr);

// accessing arrays thet are 0 based index 
console.log(arr[0]);
console.log(arr.length); // gives exact lenth or elements in the array it snota 0 based index
// [ ] we can put any epxression in this barckets

console.log(arr[arr.length - 1]);

arr[2] = 'selena' // we can change the value even its in const

// we can muattate arrays even its declared with const 
// but we cannot muattae enite array



// new Array is afunction 
const years = new Array(1991, 1998, 2008, 2020)
console.log(years);







