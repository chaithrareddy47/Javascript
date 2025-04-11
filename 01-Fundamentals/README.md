# JavaScript Fundamentals – Part 1 🚀

## 📚 Topics Covered
- ✅ Console Output
- ✅ `if...else` Conditions
- ✅ Linking JavaScript Files
- ✅ Values and Variables
- ✅ Variable Naming Conventions
- ✅ `let`, `const`, and `var`
- ✅ Data Types in JavaScript
- ✅ Type Conversion & Coercion
- ✅ Operators (Arithmetic, Logical, Comparison)
- ✅ Template Literals & Multiline Strings
- ✅ Conditional Statements (`if/else`)
- ✅ Assignment Challenge – Country Info

---

## 💻 Console Output & Basics
```js
console.log('Hello World');

let js = 'amazing';
if (js === 'amazing') {
  console.log('Js is amazing');
} else {
  console.log('js is boring');
}

console.log(40 + 6 + 10 + 7);

. Use console.log() to output values.

. Basic if...else conditions.
 <hr>

- Linking JavaScript Files
Inline and External JS:
<script src="script.js"></script>


🧠 Values & Variables
 - let firstName = "Jhonas";
console.log(firstName);

Variables store values: let, const, var

Naming conventions:

✅ Use camelCase

❌ Cannot start with a number

✅ Can contain _ and $

❌ Avoid reserved keywords like new, name


🏁 Assignment 01 – Country Info
let country = 'India';
let continent = 'Asia';
let population = '10 million';

console.log(country);
console.log(continent);
console.log(population);

🧬 Data Types

let jsIsFun = true;
console.log(typeof jsIsFun); // boolean

let dynamicValue = 'Dynamic';
dynamicValue = 23;
console.log(typeof dynamicValue); // number

let year;
console.log(typeof year); // undefined

console.log(typeof null); // object (quirk in JS)

7 Primitive Data Types:
Number

String

Boolean

Undefined

Null

Symbol

BigInt

🧪 let, const, and var
let age = 20;
age = 30;

var myName = 'chai';
var myName = 'abcs'; // Redeclaration allowed

const birthYear = 1998;
// birthYear = 2000 ❌ (error)

lastName = 'abcd'; // Global variable (bad practice)

let: block scoped, can reassign

const: cannot reassign or redeclare

var: function scoped, can redeclare


➕ Operators
js
Copy code
const ageChai = 2025 - 1998;
console.log(ageChai);
Arithmetic: +, -, *, /, %, **

Logical: &&, ||, !

Comparison: >, <, >=, ===, !==

✨ Template Literals
js
Copy code
const year = 2025;
const firstName = 'chai';
const birthYear = 1998;

const sentence = `I am ${firstName}, a ${year - birthYear} old student!`;
console.log(sentence);
✅ Multiline Strings:
js
Copy code
console.log(`Multi line string
yayy 🥰
`);
🔀 if...else Statement
js
Copy code
const age = 17;
if (age >= 18) {
  console.log(`You are eligible 😁`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You are not eligible 🤨. Wait ${yearsLeft} more years.`);
}
🔄 Type Conversion
js
Copy code
const sum = 35 + 'hello';
console.log(sum, typeof sum); // "35hello" string
Implicit Conversion: happens automatically

Explicit Conversion: done manually using Number(), String()