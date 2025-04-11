// // Basic js Hello worls program

// console.log('Hello World');

// let js = 'amazing'

// if (js === 'amazing') {
//     console.log('Js is amazing');
    
// } else {
//     console.log('js is boring');
    
// }


// // Linking js files
// /*
//   inline  and  external
// */

// // console - explicitly outputbthe results


// console.log(40 + 6 + 10 + 7);

// /*
//  script tag to link external js file
//  src - path of the file

// */

// /*
//   values and variables

//   jhonas, 23  are a\the diffrent  values
//   value s- smallest unit of information
//   we store thm in variables i,e let const and var

//   varibale is a box hwich stores some data
// */

// console.log('Jhonas');

// // declarion variable

// let firstName = "Jhonas";
// console.log(firstName);

// // variable names and conventions
// /*
//   - camelCase convention eg- chaithReddy, firstName
//   - we can use underscore
//   - cannot start with number
//   - variable name can contain $ and _
//   -  number can be used at the end or middle
//   - we cannot use keywords bcause its alredy reserved for something else
//   - name is also reserved but we can use leggealy but we shiuld not use name as a varibaline name
//   - uppaersacse is used in object ans in constant whihc values does not change
//   - varianles names should always be meaningful
// */

// let myName = 'Chai';
// let my_Name = 'chai'
// // let 3Name = 'name' - syntac error we get
// let $myNmae = 'c'
// let _names = ' c'
// // let new = 'chai'

// let myFirstJob = 'Student';
// let secondJob = 'frontend developer';


// /*
//  * Assignemnt 01
// Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.



// */

// let country = 'India';
// let continent = 'Asia';
// let population = '10 million'

// console.log(country);
// console.log(continent);
// console.log(population);



/*
 * Data types 
 in js evey value is an object  or peimitive

 - 7 primitive data types
 -- most imp data types mainly used
 1. Number - flaoting paoint 
 2. string - sequence of character
 3. Boolean - logical values true or false
 4. Undefined - empty value value not defined
 5. null - empty value
 6. symbol- value unique but cannot chnage
 7.Bigint - large integer can hold only number type

 js autimatically define the data type so its dynamivcally typed language

  vlaue has type not the variable

*/

/*
* comments
  comments  - ingnores by compiler or js  mainly used for taking notes
  - single line  //
  - multiline  
*/

// let jsIsFun = true;
// console.log(jsIsFun);

// // typeoF is used to show the type of the operator

// console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "Chai");

// // dynampic typed changing  the data type means we can reassign the variable into another type
// // - changing the context of the box or variable

// let dynamicValue = 'Dynamic';
// dynamicValue = 23;
// console.log( typeof dynamicValue);


// // undefiend - empty value
// let year; // declaring the variable
// console.log(typeof year);
// year = 1998; // initialization

// // null it gives object - some says its object or error
// console.log(typeof null);

/*
   * let const var 
  var - old way of declaring variable
  let and const - es6

  - var redeclaration and reassignmet can be sone in same scope

  - let -  reassignment can be done  redeclaration cannot be done
  - redeclaration can be done in diffreent scope but not innsame scope

  - const cannot redeclare or reassign the variable
  - cannot declare empty variable
  - always use const use let only when it changes in future 
*/

// let age = 20; // age cann be changed each year
// age = 30; // block scope

// var myName = 'chai'; // functionla scope

// var myName = ' abcs';


// const birthYear = 1998; // birth year which cannot chage its immutable

// // we can declare even without declaring varible
// // js created this variable in global
// lastName = 'abcd'
// console.log(lastName);

/*
 *  Operators 
- Airthmetic + - * / % **
- logical AND , OR, NOT
- conditional < > <= >= == !=

+ can laso used to concatinatie strings
 */

// const ageChai = 2025 - 1998;
// console.log(ageChai);

/*
* Strings and tenplate literals


 */
const year = 2025
const firstName = 'chai';
const job = 'Student';
const birthYear = 1998;

const johans = "I am" + firstName + ", a " + (year - birthYear) + " old student.!"
console.log(johans);

// template literals ``${} writeing strings in normal ways
// ${} we can do calculations and also expressions

// const jhonasNew = `I am ${firstName} , a ${year - birthYear} old student.!`
// console.log(jhonasNew);

// // multiline string
// console.log(" multi line strinfs \n\
//      ufff 😣 \n\
//     ");

// console.log(` multi line string
//    yayy 🥰
//     `);

    /*
    * if else statement 
   if(){
   } else{
    }
     
     */

// const age = 17;
// if (age >= 18) {
//     console.log(` you are eligibale 😁`);
    
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`you are not elogible 🤨 . wait another ${yearsLeft} years. `);
    
// }

/*
 Type conversion
 - string convets into number on;y when it had numbers 

 type conversion - conveting value form one type to another 

 implicit conversion automatiaclly during code execution

 explicit concersion done by developers manuvally 
*/

const sum = 35 + 'hello'
console.log(sum , typeof sum);




    









